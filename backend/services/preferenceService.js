const { supabase } = require('../config/supabase');

async function getPreferenceByUserId(userId) {
  const { data, error } = await supabase
    .from('user_preferences')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function createPreference(pref) {
  const { data, error } = await supabase
    .from('user_preferences')
    .insert({
      user_id: pref.user_id,
      theme: pref.theme,
      color_primary: pref.color_primary,
      background_image: pref.background_image,
      email_notifications: pref.email_notifications ?? true,
      daily_email: pref.daily_email ?? false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .single();
  if (error) throw error;
  return data;
}

async function updatePreference(userId, updates) {
  updates.updated_at = new Date().toISOString();
  const { data, error } = await supabase
    .from('user_preferences')
    .update(updates)
    .eq('user_id', userId)
    .single();
  if (error) throw error;
  return data;
}

module.exports = {
  getPreferenceByUserId,
  createPreference,
  updatePreference,
};
