const cron = require('node-cron');
const { supabase } = require('../config/supabase');
const { sendDailyJournalEmail } = require('../services/notificationService');

function startDailyEmailScheduler() {
  cron.schedule('0 6 * * *', async () => {
    try {
      const { data: users, error } = await supabase
        .from('user_preferences')
        .select('user_id,email_notifications,daily_email,users(email,first_name)')
        .eq('email_notifications', true)
        .eq('daily_email', true);
      if (error) throw error;
      for (const pref of users || []) {
        const user = {
          email: pref.users.email,
          first_name: pref.users.first_name,
        };
        await sendDailyJournalEmail(user);
      }
    } catch (e) {
      console.error('Daily email scheduler error', e);
    }
  });
}

module.exports = { startDailyEmailScheduler };
