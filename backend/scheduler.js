const cron = require('node-cron');
const { generateEnergyMessage } = require('./services/openaiService');

/**
 * Schedule daily generation of energy message at 6 AM server time.
 */
function startSchedulers() {
  cron.schedule('0 6 * * *', async () => {
    try {
      await generateEnergyMessage('Provide a short daily spiritual guidance');
    } catch (e) {
      console.error('Scheduler error', e);
    }
  });
}

module.exports = { startSchedulers };
