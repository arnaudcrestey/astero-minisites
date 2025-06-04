const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/auth');
const {
  getPreferenceByUserId,
  createPreference,
  updatePreference,
} = require('../services/preferenceService');

router.get('/preferences/:user_id', authMiddleware, async (req, res) => {
  try {
    if (req.user.id !== req.params.user_id) {
      return res.status(403).json({ error: 'forbidden' });
    }
    const pref = await getPreferenceByUserId(req.params.user_id);
    res.json(pref || {});
  } catch (e) {
    res.status(500).json({ error: 'pref_error' });
  }
});

router.post('/preferences', authMiddleware, async (req, res) => {
  try {
    const pref = await createPreference({ ...req.body, user_id: req.user.id });
    res.json(pref);
  } catch (e) {
    res.status(500).json({ error: 'pref_error' });
  }
});

router.put('/preferences/:user_id', authMiddleware, async (req, res) => {
  try {
    if (req.user.id !== req.params.user_id) {
      return res.status(403).json({ error: 'forbidden' });
    }
    const pref = await updatePreference(req.params.user_id, req.body);
    res.json(pref);
  } catch (e) {
    res.status(500).json({ error: 'pref_error' });
  }
});

module.exports = router;
