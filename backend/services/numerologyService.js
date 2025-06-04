const fetch = require('node-fetch');

async function getNumerologyInfo(dateOfBirth) {
  const response = await fetch(`https://numerologyapi.com/api?dob=${dateOfBirth}&api_key=${process.env.NUMEROLOGY_API_KEY}`);
  const data = await response.json();
  return data;
}

module.exports = { getNumerologyInfo };
