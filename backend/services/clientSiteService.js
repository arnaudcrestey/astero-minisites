const { supabase } = require('../config/supabase');

/**
 * Retrieve data necessary for a user's mini-site from Supabase.
 * @param {string} username - User unique identifier
 */
async function getClientSiteData(username) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();
  if (error) throw error;
  return data;
}

module.exports = { getClientSiteData };
