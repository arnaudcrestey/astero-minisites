const { Configuration, OpenAIApi } = require('openai');
const { supabase } = require('../config/supabase');
const { assertValidBirthDate, assertRequired } = require('../utils/validators');

// Configure OpenAI client using API key from environment
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Generate a personalized daily energy message using GPT-4o.
 * @param {string} firstName - User first name
 * @param {string} birthDate - Date of birth YYYY-MM-DD
 */
async function generatePersonalEnergyMessage(firstName, birthDate, welcome = false) {
  assertRequired(firstName, 'firstName');
  assertValidBirthDate(birthDate);
  let prompt = `Create a short daily energy message for ${firstName} born on ${birthDate}.`;
  if (welcome) {
    prompt += ' Welcome the user to Astero in one friendly sentence.';
  }
  const response = await openai.createChatCompletion({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
  });
  const message = response.data.choices[0].message.content;
  await supabase.from('energy_messages').insert({
    first_name: firstName,
    birth_date: birthDate,
    message,
    date: new Date().toISOString().slice(0, 10),
  });
  return message;
}

module.exports = { generatePersonalEnergyMessage };
