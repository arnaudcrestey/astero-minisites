const { supabase } = require('../config/supabase');

/**
 * Create a new user record in Supabase
 */
async function createUser(user) {
  const { data, error } = await supabase.from('users').insert(user).single();
  if (error) throw error;
  return data;
}

/**
 * Retrieve user by id
 */
async function getUserById(id) {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

/**
 * Retrieve user by username
 */
async function getUserByUsername(username) {
  const { data, error } = await supabase.from('users').select('*').eq('username', username).single();
  if (error) throw error;
  return data;
}

/**
 * Update user fields
 */
async function updateUser(id, updates) {
  const { data, error } = await supabase.from('users').update(updates).eq('id', id).single();
  if (error) throw error;
  return data;
}

/**
 * Delete user record
 */
async function deleteUser(id) {
  const { error } = await supabase.from('users').delete().eq('id', id);
  if (error) throw error;
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
};
