import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserSite() {
  const { query } = useRouter();
  const [profile, setProfile] = useState(null);
  const [prefs, setPrefs] = useState(null);

  useEffect(() => {
    if (!query.username) return;
    fetch(`/api/site/${query.username}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        return fetch(`/api/preferences/${data.id}`);
      })
      .then(res => (res && res.ok ? res.json() : null))
      .then(setPrefs)
      .catch(() => {
        setProfile(null);
        setPrefs(null);
      });
  }, [query.username]);

  if (!profile) return <div>Chargement...</div>;
  const styles = {
    backgroundImage: prefs && prefs.background_image ? `url(${prefs.background_image})` : 'none',
    color: prefs && prefs.color_primary ? prefs.color_primary : 'inherit',
    padding: '20px',
  };
  return (
    <div style={styles}>
      <h1>Mini-site de {query.username}</h1>
      <p>Thème astro : {profile.zodiac_sign || 'N/A'}</p>
      <p>Chemin de vie : {profile.lifePath || 'Calcul en cours'}</p>
      <p>Message énergétique :</p>
      <blockquote>{profile.energyMessage || 'En attente...'}</blockquote>
    </div>
  );
}
