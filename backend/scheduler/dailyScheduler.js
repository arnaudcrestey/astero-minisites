const cron = require('node-cron');
const { generateDailyJournal } = require('../services/journalService');

function startDailyScheduler() {
  cron.schedule('0 7 * * *', async () => {
    // Placeholder for future daily journal generation for all users
    console.log('Daily scheduler executed');
    // In next sprint we would iterate over users and call generateDailyJournal
  });
}

module.exports = { startDailyScheduler };
