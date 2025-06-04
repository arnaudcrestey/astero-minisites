# Astero Minisites

Plateforme SaaS de mini‑sites ésotériques personnalisés.

## Structure
- **frontend/** : Application Next.js
- **backend/** : API Node.js/Express
- **.env.example** : variables d'environnement

## Démarrage rapide
```bash
# Installer les dépendances
npm install

# Lancer le développement (frontend + backend)
npm run dev
```

Copiez le fichier `.env.example` vers `.env` puis renseignez :
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_KEY`
- `OPENAI_API_KEY`
- `NUMEROLOGY_API_KEY`
- `STRIPE_SECRET_KEY`
- `FRONTEND_URL`
- `SUPABASE_STORAGE_BUCKET`
- `SENDGRID_API_KEY`
- `FROM_EMAIL`

### Déploiement
Le frontend est prêt à être déployé sur Vercel. Le backend peut être déployé sur la plateforme de votre choix (Railway, Vercel serverless, etc.).

## Fonctionnalités Sprint 4
- Modèle `users` géré dans Supabase.
- Route sécurisée `/api/generateUserContent` pour créer le contenu des mini-sites.
- Chaque utilisateur possède une page dédiée disponible sur `/[username]` affichant son thème astro, son chemin de vie et son message énergétique.

## Fonctionnalités Sprint 14
- Gestion des rôles utilisateur avec middleware `securityMiddleware`.
- Route `GET /admin/dashboard` réservée aux admins.
- Route `GET /api/user/profile` pour le profil connecté.

