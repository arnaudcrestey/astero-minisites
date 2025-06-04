import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserJournal() {
  const { query } = useRouter();
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchJournal = async () => {
    if (!query.username) return;
    const res = await fetch(`/api/journal/${query.username}`);
    const data = await res.json();
    setEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJournal();
  }, [query.username]);

  const refreshToday = async () => {
    setRefreshing(true);
    await fetch('/api/generateDailyJournal', { method: 'POST' });
    await fetchJournal();
    setRefreshing(false);
  };

  if (loading) return <div>Chargement...</div>;
  const today = entries.find(e => e.date === new Date().toISOString().slice(0,10));

  return (
    <div>
      <h1>Journal de {query.username}</h1>
      {today ? (
        <div>
          <h2>Journal du {today.date}</h2>
          <p>{today.energy_message}</p>
          <p>{today.horoscope}</p>
          <p>{today.numerology_summary}</p>
        </div>
      ) : (
        <button onClick={refreshToday} disabled={refreshing}>
          Rafraîchir la journée
        </button>
      )}
      <h3>Historique</h3>
      <ul>
        {entries.map(e => (
          <li key={e.id}>
            {e.date}: {e.energy_message}
          </li>
        ))}
      </ul>
    </div>
  );
}
