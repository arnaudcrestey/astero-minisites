const { supabase } = require('../config/supabase');

async function createProfile(profile) {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profile)
    .single();
  if (error) throw error;
  return data;
}

async function getProfileByUserId(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

module.exports = { createProfile, getProfileByUserId };
