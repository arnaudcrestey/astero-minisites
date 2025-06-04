const { supabase } = require('../config/supabase');

/**
 * Retrieve the role of a user from Supabase.
 *
 * RLS policy suggestion on `users` table:
 * enable row level security;
 * create policy "Users can view own role" on users
 *   for select using (auth.uid() = id);
 */
async function getUserRole(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('role')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data ? data.role : null;
}

/**
 * Check if a role is part of the allowed roles list.
 */
function checkRole(role, allowedRoles = []) {
  return allowedRoles.includes(role);
}

module.exports = { getUserRole, checkRole };
