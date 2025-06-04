const { generateDailyJournal } = require('./journalService');

/**
 * Initialize a new user by generating first content.
 * Calls daily journal generation with a welcome message option.
 * @param {string} userId Supabase user id
 */
async function initializeUser(userId) {
  await generateDailyJournal(userId, { welcome: true });
}

module.exports = { initializeUser };
