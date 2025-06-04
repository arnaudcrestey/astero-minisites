const express = require('express');
const router = express.Router();
const { generatePersonalEnergyMessage } = require('../services/openaiService');
const { getNumerologyInfo } = require('../services/numerologyService');
const { getDailyHoroscope } = require('../services/horoscopeService');
const { getClientSiteData } = require('../services/clientSiteService');
const { supabase } = require('../config/supabase');
const authMiddleware = require('../utils/auth');

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

// Return products list
router.get('/products', async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// Public route for client mini-site data
router.get('/site/:username', async (req, res) => {
  try {
    const data = await getClientSiteData(req.params.username);
    res.json(data);
  } catch (e) {
    res.status(404).json({ error: 'not_found' });
  }
});

module.exports = router;
