const express = require('express');
const router = express.Router();
const { generatePersonalEnergyMessage } = require('../services/openaiService');
const { initializeUser } = require('../services/initializationService');
const { getNumerologyInfo } = require('../services/numerologyService');
const { getDailyHoroscope } = require('../services/horoscopeService');
const { getClientSiteData } = require('../services/clientSiteService');
const { createUser, getUserById, getUserByUsername } = require('../services/userService');
const { createProfile, getProfileByUserId } = require('../services/profileService');
const { createPreference } = require('../services/preferenceService');
const { createSubscription } = require('../services/subscriptionService');
const {
  generateDailyJournal,
  getJournalEntriesByUsername,
} = require('../services/journalService');
const crypto = require('crypto');
const { supabase } = require('../config/supabase');
const authMiddleware = require('../utils/auth');
const subscriptionMiddleware = require('../utils/subscriptionAuth');
const securityMiddleware = require('../utils/securityMiddleware');

// Register a new user with mini-site setup
router.post('/register', async (req, res) => {
  const { email, password, firstName, dob, gender, username } = req.body;
  if (!email || !password || !firstName || !dob) {
    return res.status(400).json({ error: 'missing_fields' });
  }
  try {
    // Verify username availability or generate one
    let finalUsername = (username || firstName).toLowerCase();
    try {
      const existing = await getUserByUsername(finalUsername);
      if (existing) {
        finalUsername = `${firstName.toLowerCase()}-${Math.floor(Math.random() * 10000)}`;
      }
    } catch (e) {
      // ignore if not found
    }

    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (authError) return res.status(400).json({ error: 'auth_error' });
    const userId = authUser.user.id;

    await createUser({ id: userId, email, username: finalUsername, first_name: firstName, birth_date: dob });

    const profileId = crypto.randomUUID();
    await createProfile({ id: profileId, user_id: userId, gender, first_name: firstName, birth_date: dob });

    await createPreference({ user_id: userId, theme: 'astro', color_primary: '#000000', background_image: '' });

    await createSubscription(userId, 'free_trial');

    // Trigger automated content initialization
    await initializeUser(userId);

    res.json({ id: userId, username: finalUsername, profileId });
  } catch (e) {
    console.error('register error', e);
    res.status(500).json({ error: 'register_error' });
  }
});

// Endpoint to generate personalized energy message
router.get('/energy-message/:firstName/:dob', authMiddleware, async (req, res) => {
  const { firstName, dob } = req.params;
  try {
    const message = await generatePersonalEnergyMessage(firstName, dob);
    res.json({ message });
  } catch (e) {
    res.status(500).json({ error: 'openai_error' });
  }
});

// Numerology calculation
router.get('/numerology/:dob', authMiddleware, async (req, res) => {
  try {
    const data = await getNumerologyInfo(req.params.dob);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'numerology_error' });
  }
});

// Horoscope route
router.get('/horoscope/:sign/:dob', authMiddleware, async (req, res) => {
  const { sign, dob } = req.params;
  try {
    const horoscope = await getDailyHoroscope(sign, dob);
    res.json({ horoscope });
  } catch (e) {
    res.status(500).json({ error: 'horoscope_error' });
  }
});

// Generate and store numerology and energy message for authenticated user
router.post('/generateUserContent', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await getUserById(userId);
    if (!user) return res.status(404).json({ error: 'user_not_found' });

    const { birth_date: birthDate, first_name: firstName } = user;

    const numerologyData = await getNumerologyInfo(birthDate);
    const energyMessage = await generatePersonalEnergyMessage(firstName, birthDate);

    res.json({ lifePath: numerologyData.lifePath, energyMessage });
  } catch (e) {
    res.status(500).json({ error: 'generation_error' });
  }
});

// Return products list
router.get('/products', authMiddleware, async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// Public route for client mini-site data
router.get('/site/:username', authMiddleware, async (req, res) => {
  try {
    const data = await getClientSiteData(req.params.username);
    res.json(data);
  } catch (e) {
    res.status(404).json({ error: 'not_found' });
  }
});

// Retrieve journal history for a username
router.get('/journal/:username', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const data = await getJournalEntriesByUsername(req.params.username);
    res.json(data);
  } catch (e) {
    res.status(404).json({ error: 'not_found' });
  }
});

// Generate daily journal for authenticated user
router.post('/generateDailyJournal', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const entry = await generateDailyJournal(req.user.id);
    res.json(entry);
  } catch (e) {
    res.status(500).json({ error: 'journal_error' });
  }
});

// Retrieve current user profile
router.get('/user/profile', authMiddleware, securityMiddleware(['admin', 'user', 'premium']), async (req, res) => {
  try {
    const profile = await getProfileByUserId(req.user.id);
    res.json(profile || {});
  } catch (e) {
    res.status(500).json({ error: 'profile_error' });
  }
});

// Legacy endpoint kept for backward compatibility
router.get('/profile', authMiddleware, securityMiddleware(['admin', 'user', 'premium']), async (req, res) => {
  try {
    const profile = await getProfileByUserId(req.user.id);
    res.json(profile || {});
  } catch (e) {
    res.status(500).json({ error: 'profile_error' });
  }
});

module.exports = router;
