const { supabase } = require('../config/supabase');
const { getUserById, getUserByUsername } = require('./userService');
const { getNumerologyInfo } = require('./numerologyService');
const { getDailyHoroscope } = require('./horoscopeService');
const { generatePersonalEnergyMessage } = require('./openaiService');

function getZodiacSign(dateStr) {
  const d = new Date(dateStr);
  const day = d.getUTCDate();
  const month = d.getUTCMonth() + 1;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces';
}

async function generateDailyJournal(userId) {
  const today = new Date().toISOString().slice(0, 10);
  const { data: existing } = await supabase
    .from('daily_journal')
    .select('*')
    .eq('user_id', userId)
    .eq('date', today)
    .maybeSingle();
  if (existing) return existing;

  const user = await getUserById(userId);
  if (!user) throw new Error('user_not_found');
  const birthDate = user.birth_date;
  const firstName = user.first_name;
  const numerology = await getNumerologyInfo(birthDate);
  const zodiac = getZodiacSign(birthDate);
  const horoscope = await getDailyHoroscope(zodiac, birthDate);
  const energy = await generatePersonalEnergyMessage(firstName, birthDate);

  const { data, error } = await supabase
    .from('daily_journal')
    .insert({
      user_id: userId,
      date: today,
      energy_message: energy,
      horoscope,
      numerology_summary: `Life path ${numerology.lifePath}`,
      created_at: new Date().toISOString(),
    })
    .single();
  if (error) throw error;
  return data;
}

async function getJournalEntriesByUsername(username) {
  const user = await getUserByUsername(username);
  if (!user) throw new Error('user_not_found');
  const { data, error } = await supabase
    .from('daily_journal')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false });
  if (error) throw error;
  return data;
}

module.exports = { generateDailyJournal, getJournalEntriesByUsername };
