const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/auth');
const { stripe } = require('../config/stripe');
const {
  createSubscription,
  getUserSubscription,
  cancelSubscription,
} = require('../services/subscriptionService');

router.get('/subscription', authMiddleware, async (req, res) => {
  try {
    const sub = await getUserSubscription(req.user.id);
    res.json(sub || { plan: 'free', status: 'free' });
  } catch (e) {
    res.status(500).json({ error: 'subscription_error' });
  }
});

router.post('/subscription/cancel', authMiddleware, async (req, res) => {
  try {
    const sub = await cancelSubscription(req.user.id);
    res.json(sub);
  } catch (e) {
    res.status(500).json({ error: 'cancel_error' });
  }
});

router.post('/payment/session', authMiddleware, async (req, res) => {
  const { priceId, plan } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/account?success=1`,
      cancel_url: `${process.env.FRONTEND_URL}/account?cancel=1`,
      customer_email: req.user.email,
    });
    await createSubscription(req.user.id, plan || 'premium');
    res.json({ url: session.url });
  } catch (e) {
    console.error('stripe session error', e);
    res.status(500).json({ error: 'stripe_error' });
  }
});

module.exports = router;
