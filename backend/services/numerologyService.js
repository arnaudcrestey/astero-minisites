const { supabase } = require('../config/supabase');

/**
 * Calculate numerology life path number from birth date (YYYY-MM-DD)
 */
function calculateLifePath(dob) {
  const digits = dob.replace(/-/g, '').split('').map(n => parseInt(n, 10));
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}

/**
 * Compute and store numerology data for a user birth date
 */
async function getNumerologyInfo(dateOfBirth) {
  const lifePath = calculateLifePath(dateOfBirth);
  await supabase.from('numerology_results').insert({ birth_date: dateOfBirth, life_path: lifePath, created_at: new Date().toISOString() });
  return { lifePath };
}

module.exports = { getNumerologyInfo };
