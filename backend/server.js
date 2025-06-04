const express = require('express');
const { supabase } = require('./config/supabase');
const userRoutes = require('./routes/userRoutes');
const { startSchedulers } = require('./scheduler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Astero Backend API' });
});

// Example protected route using Supabase Auth
app.get('/profile', async (req, res) => {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.use('/api', userRoutes);

// Start background tasks
startSchedulers();

module.exports = app;
