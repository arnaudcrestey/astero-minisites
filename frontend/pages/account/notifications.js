import { useEffect, useState } from 'react';

export default function Notifications() {
  const [prefs, setPrefs] = useState({ email_notifications: true, daily_email: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const profRes = await fetch('/api/profile');
        const profData = await profRes.json();
        const user = Array.isArray(profData) ? profData[0] : profData;
        const prefRes = await fetch(`/api/preferences/${user.id}`);
        if (prefRes.ok) {
          const prefData = await prefRes.json();
          if (prefData) setPrefs({
            ...prefs,
            ...prefData,
          });
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleChange = e => {
    setPrefs({ ...prefs, [e.target.name]: e.target.checked });
  };

  const save = async () => {
    const profRes = await fetch('/api/profile');
    const profData = await profRes.json();
    const user = Array.isArray(profData) ? profData[0] : profData;
    const method = prefs.id ? 'PUT' : 'POST';
    const url = prefs.id ? `/api/preferences/${user.id}` : '/api/preferences';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prefs),
    });
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Notifications par email</h1>
      <label>
        <input
          type="checkbox"
          name="email_notifications"
          checked={prefs.email_notifications}
          onChange={handleChange}
        />
        Activer les emails
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="daily_email"
          checked={prefs.daily_email}
          onChange={handleChange}
        />
        Recevoir l'email quotidien
      </label>
      <br />
      <button onClick={save}>Enregistrer</button>
    </div>
  );
}
