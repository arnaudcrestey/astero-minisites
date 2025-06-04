import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Profil utilisateur</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
