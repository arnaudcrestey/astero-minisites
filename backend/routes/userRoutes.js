const express = require('express');
const router = express.Router();
const { generateEnergyMessage } = require('../services/openaiService');
const { getNumerologyInfo } = require('../services/numerologyService');

router.get('/energy-message', async (req, res) => {
  const message = await generateEnergyMessage('Give me a positive energy message');
  res.json({ message });
});

router.get('/numerology/:dob', async (req, res) => {
  const data = await getNumerologyInfo(req.params.dob);
  res.json(data);
});

module.exports = router;
