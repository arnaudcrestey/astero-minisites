const { supabase } = require('../config/supabase');

async function createSubscription(userId, plan) {
  const { data, error } = await supabase
    .from('subscriptions')
    .insert({
      user_id: userId,
      plan,
      status: 'active',
      created_at: new Date().toISOString(),
    })
    .single();
  if (error) throw error;
  return data;
}

async function getUserSubscription(userId) {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function cancelSubscription(userId) {
  const { data, error } = await supabase
    .from('subscriptions')
    .update({ status: 'cancelled' })
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();
  if (error) throw error;
  return data;
}

module.exports = {
  createSubscription,
  getUserSubscription,
  cancelSubscription,
};
