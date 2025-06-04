const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');

// GET /admin/users - list of users
router.get('/users', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id,email,username,created_at,subscriptions(plan,status,created_at)');
    if (error) throw error;
    const users = data.map(u => ({
      id: u.id,
      email: u.email,
      username: u.username,
      subscription: u.subscriptions && u.subscriptions[0] ? u.subscriptions[0] : null,
      created_at: u.created_at,
    }));
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: 'fetch_users_error' });
  }
});

// GET /admin/minisites - list of minisites
router.get('/minisites', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('theme, created_at, users(username)');
    if (error) throw error;
    const sites = data.map(row => ({
      username: row.users.username,
      theme: row.theme,
      created_at: row.created_at,
    }));
    res.json(sites);
  } catch (e) {
    res.status(500).json({ error: 'fetch_sites_error' });
  }
});

// GET /admin/subscriptions - list of subscriptions
router.get('/subscriptions', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('plan,status,created_at');
    if (error) throw error;
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'fetch_subscriptions_error' });
  }
});

module.exports = router;

