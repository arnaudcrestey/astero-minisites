const express = require('express');
const router = express.Router();
const { generateEnergyMessage } = require('../services/openaiService');
const { getNumerologyInfo } = require('../services/numerologyService');
const { getDailyHoroscope } = require('../services/horoscopeService');
const { supabase } = require('../config/supabase');
const authMiddleware = require('../utils/auth');

// Endpoint to trigger energy message generation and return today's message
router.get('/energy-message', authMiddleware, async (req, res) => {
  try {
    const message = await generateEnergyMessage('Give me a positive energy message');
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

module.exports = router;
