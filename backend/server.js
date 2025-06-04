const express = require('express');
const { supabase } = require('./config/supabase');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const { startSchedulers } = require('./scheduler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Astero Backend API' });
});

// Example protected route using Supabase Auth
const authMiddleware = require('./utils/auth');

app.get('/profile', authMiddleware, async (req, res) => {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.use('/api', userRoutes);
app.use('/api', paymentRoutes);
app.use('/api', preferenceRoutes);
app.use('/api', uploadRoutes);

// Start background tasks
startSchedulers();

module.exports = app;
