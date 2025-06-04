import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserSite() {
  const { query } = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!query.username) return;
    fetch(`/api/site/${query.username}`)
      .then(res => res.json())
      .then(setProfile)
      .catch(() => setProfile(null));
  }, [query.username]);

  if (!profile) return <div>Chargement...</div>;
  return (
    <div>
      <h1>Mini-site de {query.username}</h1>
      <p>Thème astro : {profile.zodiac_sign || 'N/A'}</p>
      <p>Chemin de vie : {profile.lifePath || 'Calcul en cours'}</p>
      <p>Message énergétique :</p>
      <blockquote>{profile.energyMessage || 'En attente...'}</blockquote>
    </div>
  );
}
