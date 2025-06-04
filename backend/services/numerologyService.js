const fetch = require('node-fetch');
const { supabase } = require('../config/supabase');

/**
 * Call NumerologyAPI to compute life path number for given birth date.
 * Result is stored in Supabase table `numerology_results`.
 * @param {string} birthDate - Date of birth YYYY-MM-DD
 */
async function getNumerologyInfo(birthDate) {
  const url = `https://numerologyapi.com/api/v1/life-path?date_of_birth=${birthDate}`;
  const response = await fetch(url, {
    headers: { 'X-Api-Key': process.env.NUMEROLOGY_API_KEY },
  });
  const data = await response.json();
  const lifePath = data.life_path || null;
  await supabase.from('numerology_results').insert({
    birth_date: birthDate,
    life_path: lifePath,
    created_at: new Date().toISOString(),
  });
  return { lifePath };
}

module.exports = { getNumerologyInfo };
