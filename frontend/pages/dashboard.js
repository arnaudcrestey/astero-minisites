import { useEffect, useState } from 'react';
import EnergyMessage from '../components/EnergyMessage';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    async function load() {
      const profRes = await fetch('/api/profile');
      const profData = await profRes.json();
      const user = Array.isArray(profData) ? profData[0] : profData;
      setProfile(user);
      const journalRes = await fetch(`/api/journal/${user.username}`);
      if (journalRes.ok) {
        const data = await journalRes.json();
        setEntries(data);
      }
    }
    load();
  }, []);

  if (!profile || !entries) return <div>Chargement...</div>;
  const today = entries.find(e => e.date === new Date().toISOString().slice(0,10));

  return (
    <div>
      <h1>Mon tableau de bord</h1>
      {today && <EnergyMessage message={today.energy_message} />}
      {today && (
        <div>
          <h2>Horoscope</h2>
          <p>{today.horoscope}</p>
          <h2>Numérologie</h2>
          <p>{today.numerology_summary}</p>
        </div>
      )}
    </div>
  );
}
