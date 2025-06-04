const { getUserSubscription } = require('../services/subscriptionService');

module.exports = async function(req, res, next) {
  try {
    const sub = await getUserSubscription(req.user.id);
    if (!sub || sub.status !== 'active') {
      return res.status(403).json({ error: 'subscription_required' });
    }
    req.subscription = sub;
    next();
  } catch (e) {
    res.status(500).json({ error: 'subscription_check_error' });
  }
};
