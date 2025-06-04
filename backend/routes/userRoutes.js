const express = require('express');
const router = express.Router();
const { generatePersonalEnergyMessage } = require('../services/openaiService');
const { getNumerologyInfo } = require('../services/numerologyService');
const { getDailyHoroscope } = require('../services/horoscopeService');
const { getClientSiteData } = require('../services/clientSiteService');
const { getUserById } = require('../services/userService');
const {
  generateDailyJournal,
  getJournalEntriesByUsername,
} = require('../services/journalService');
const { supabase } = require('../config/supabase');
const authMiddleware = require('../utils/auth');
const subscriptionMiddleware = require('../utils/subscriptionAuth');

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

module.exports = router;
