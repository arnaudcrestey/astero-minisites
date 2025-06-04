import { useEffect, useState } from 'react';

const themes = ['astro', 'zen', 'oracle', 'minimal', 'cosmos'];

export default function Settings() {
  const [profile, setProfile] = useState(null);
  const [prefs, setPrefs] = useState({ theme: 'astro', color_primary: '#000000', background_image: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const profRes = await fetch('/api/profile');
        const profData = await profRes.json();
        const user = Array.isArray(profData) ? profData[0] : profData;
        setProfile(user);
        const prefRes = await fetch(`/api/preferences/${user.id}`);
        if (prefRes.ok) {
          const prefData = await prefRes.json();
          if (prefData) setPrefs(prefData);
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
    setPrefs({ ...prefs, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const uploadBackground = async () => {
    if (!file) return null;
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload/background', { method: 'POST', body: form });
    const data = await res.json();
    return data.url;
  };

  const save = async () => {
    if (!profile) return;
    const method = prefs.id ? 'PUT' : 'POST';
    const url = prefs.id ? `/api/preferences/${profile.id}` : '/api/preferences';
    let bgUrl = prefs.background_image;
    if (file) {
      const uploaded = await uploadBackground();
      if (uploaded) bgUrl = uploaded;
    }
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...prefs, background_image: bgUrl }),
    });
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Préférences visuelles</h1>
      <label>
        Thème
        <select name="theme" value={prefs.theme} onChange={handleChange}>
          {themes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Couleur principale
        <input type="color" name="color_primary" value={prefs.color_primary} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image de fond
        <input type="file" onChange={handleFile} />
        <input type="text" name="background_image" value={prefs.background_image || ''} onChange={handleChange} placeholder="ou URL" />
      </label>
      <br />
      <button onClick={save}>Enregistrer</button>
    </div>
  );
}
