const express = require('express');
const multer = require('multer');
const router = express.Router();
const authMiddleware = require('../utils/auth');
const { supabase } = require('../config/supabase');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload/background', authMiddleware, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'no_file' });
    const path = `backgrounds/${req.user.id}/${Date.now()}_${req.file.originalname}`;
    const { error } = await supabase.storage
      .from('assets')
      .upload(path, req.file.buffer, { contentType: req.file.mimetype, upsert: true });
    if (error) return res.status(500).json({ error: 'upload_error' });
    const { data } = supabase.storage.from('assets').getPublicUrl(path);
    res.json({ url: data.publicUrl });
  } catch (e) {
    res.status(500).json({ error: 'upload_error' });
  }
});

module.exports = router;
