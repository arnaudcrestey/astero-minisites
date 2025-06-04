import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ firstName: '', email: '', password: '', dob: '', gender: 'female', username: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={submit}>
        <label>
          Prénom
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Mot de passe
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Date de naissance
          <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Genre
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="female">Femme</option>
            <option value="male">Homme</option>
            <option value="other">Autre</option>
          </select>
        </label>
        <br />
        <label>
          Nom d'utilisateur (optionnel)
          <input name="username" value={form.username} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Créer mon mini-site</button>
      </form>
      {status === 'loading' && <p>Création en cours...</p>}
      {status === 'success' && <p>Compte créé ! Vous pouvez vous connecter.</p>}
      {status === 'error' && <p>Erreur lors de l'inscription.</p>}
    </div>
  );
}
