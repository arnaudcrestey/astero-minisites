const fetch = require('node-fetch');
const { supabase } = require('../config/supabase');
const { assertValidBirthDate, assertRequired } = require('../utils/validators');

/**
 * Fetch daily horoscope for a zodiac sign from external API and store result.
 * @param {string} sign Zodiac sign (aries, taurus, ...)
 * @param {string} birthDate YYYY-MM-DD user birth date
 */
async function getDailyHoroscope(sign, birthDate) {
  assertRequired(sign, 'sign');
  assertValidBirthDate(birthDate);
  try {
    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, { method: 'POST' });
    const data = await response.json();
    await supabase.from('horoscopes').insert({ sign, birth_date: birthDate, date: new Date().toISOString().slice(0,10), description: data.description });
    return data.description;
  } catch (err) {
    console.error('Horoscope API error', err);
    throw err;
  }
}

module.exports = { getDailyHoroscope };
