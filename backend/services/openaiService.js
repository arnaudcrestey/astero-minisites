const { Configuration, OpenAIApi } = require('openai');
const { supabase } = require('../config/supabase');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * Generate a daily energy message using OpenAI and store it
 */
async function generateEnergyMessage(prompt) {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  const message = response.data.choices[0].message.content;
  await supabase.from('energy_messages').insert({ message, date: new Date().toISOString().slice(0,10) });
  return message;
}

module.exports = { generateEnergyMessage };
