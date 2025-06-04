const { supabase } = require('../config/supabase');

/**
 * Basic auth middleware validating Supabase JWT access token.
 */
module.exports = async function(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'unauthorized' });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data) return res.status(401).json({ error: 'unauthorized' });
  req.user = data.user;
  next();
};
