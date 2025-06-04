import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [users, setUsers] = useState(null);
  const [sites, setSites] = useState(null);
  const [subs, setSubs] = useState(null);

  useEffect(() => {
    async function load() {
      const [uRes, sRes, subRes] = await Promise.all([
        fetch('/admin/users'),
        fetch('/admin/minisites'),
        fetch('/admin/subscriptions'),
      ]);
      if (uRes.ok) setUsers(await uRes.json());
      if (sRes.ok) setSites(await sRes.json());
      if (subRes.ok) setSubs(await subRes.json());
    }
    load();
  }, []);

  if (!users || !sites || !subs) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Plan</th>
            <th>Date inscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.username}</td>
              <td>{u.subscription ? u.subscription.plan : 'N/A'}</td>
              <td>{u.created_at?.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Mini-sites</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Thème</th>
            <th>Date création</th>
          </tr>
        </thead>
        <tbody>
          {sites.map(s => (
            <tr key={s.username}>
              <td>{s.username}</td>
              <td>{s.theme}</td>
              <td>{s.created_at?.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Abonnements</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {subs.map(s => (
            <tr key={s.created_at}>
              <td>{s.plan}</td>
              <td>{s.status}</td>
              <td>{s.created_at?.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

