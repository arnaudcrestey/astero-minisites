const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL;

async function sendEmail(to, subject, text) {
  try {
    await sgMail.send({ to, from: FROM_EMAIL, subject, text });
  } catch (e) {
    console.error('Email error', e);
    throw e;
  }
}

function sendWelcomeEmail(user) {
  return sendEmail(
    user.email,
    'Bienvenue sur Astero',
    `Bonjour ${user.first_name}, bienvenue sur Astero !`
  );
}

function sendDailyJournalEmail(user) {
  return sendEmail(
    user.email,
    'Votre journal du jour',
    `Bonjour ${user.first_name}, découvrez votre journal du jour sur Astero.`
  );
}

function sendRenewalReminder(user) {
  return sendEmail(
    user.email,
    'Renouvelez votre abonnement',
    `Bonjour ${user.first_name}, votre abonnement arrive à expiration. Pensez à le renouveller.`
  );
}

module.exports = {
  sendWelcomeEmail,
  sendDailyJournalEmail,
  sendRenewalReminder,
};
