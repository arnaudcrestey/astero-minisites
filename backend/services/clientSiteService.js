const { supabase } = require('../config/supabase');

/**
 * Retrieve data necessary for a user's mini-site from Supabase.
 * @param {string} username - User unique identifier
 */
async function getClientSiteData(username) {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();
  if (error) throw error;

  const { birth_date: birthDate } = user;

  const { data: numerology } = await supabase
    .from('numerology_results')
    .select('life_path')
    .eq('birth_date', birthDate)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const { data: energy } = await supabase
    .from('energy_messages')
    .select('message')
    .eq('birth_date', birthDate)
    .order('date', { ascending: false })
    .limit(1)
    .single();

  return {
    ...user,
    lifePath: numerology ? numerology.life_path : null,
    energyMessage: energy ? energy.message : null,
  };
}

module.exports = { getClientSiteData };
