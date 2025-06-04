const { supabase } = require('../config/supabase');

/**
 * Middleware to verify that the authenticated user has the admin role.
 */
module.exports = async function(req, res, next) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', req.user.id)
      .single();
    if (error) throw error;
    if (!data || data.role !== 'admin') {
      return res.status(403).json({ error: 'forbidden' });
    }
    next();
  } catch (e) {
    res.status(500).json({ error: 'admin_auth_error' });
  }
};

