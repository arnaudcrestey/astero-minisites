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

### Déploiement
Le frontend est prêt à être déployé sur Vercel. Le backend peut être déployé sur la plateforme de votre choix (Railway, Vercel serverless, etc.).
