import { useEffect, useState } from 'react';

export default function Account() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    fetch('/api/subscription')
      .then(res => res.json())
      .then(setSubscription)
      .catch(() => setSubscription({ plan: 'free', status: 'free' }));
  }, []);

  const startCheckout = async () => {
    const res = await fetch('/api/payment/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: 'price_test', plan: 'premium' }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  const cancel = async () => {
    await fetch('/api/subscription/cancel', { method: 'POST' });
    const updated = await fetch('/api/subscription').then(r => r.json());
    setSubscription(updated);
  };

  if (!subscription) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Mon abonnement</h1>
      <p>Plan : {subscription.plan || 'free'}</p>
      <p>Status : {subscription.status || 'free'}</p>
      {subscription.status !== 'active' && (
        <button onClick={startCheckout}>S'abonner</button>
      )}
      {subscription.status === 'active' && (
        <button onClick={cancel}>Résilier</button>
      )}
    </div>
  );
}
