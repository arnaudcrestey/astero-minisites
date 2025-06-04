const express = require('express');
const { supabase } = require('./config/supabase');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { startSchedulers } = require('./scheduler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Astero Backend API' });
});

// Example protected route using Supabase Auth
const authMiddleware = require('./utils/auth');
const securityMiddleware = require('./utils/securityMiddleware');
const { getProfileByUserId } = require('./services/profileService');

app.get(
  '/user/profile',
  authMiddleware,
  securityMiddleware(['admin', 'user', 'premium']),
  async (req, res) => {
    try {
      const profile = await getProfileByUserId(req.user.id);
      res.json(profile || {});
    } catch (e) {
      res.status(500).json({ error: 'profile_error' });
    }
  }
);

app.use('/api', userRoutes);
app.use('/api', paymentRoutes);
app.use('/api', preferenceRoutes);
app.use('/api', uploadRoutes);
app.use('/admin', authMiddleware, securityMiddleware(['admin']), adminRoutes);

// Start background tasks
startSchedulers();

module.exports = app;
