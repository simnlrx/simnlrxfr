# simnlrx.fr

Site portfolio personnel de Simon Le Roux, construit avec Next.js et deploye en Docker derriere Nginx Proxy Manager.

## Stack

- Next.js 16
- React 19
- TypeScript 6
- Tailwind CSS 4
- Framer Motion
- Docker Compose
- Nginx interne, expose uniquement au reseau Docker

## Prerequis

- Node.js 20 ou plus recent
- npm
- Docker et Docker Compose
- Nginx Proxy Manager pour l'exposition publique HTTPS

## Installation locale

```bash
cd frontend
npm install
npm run dev
```

Le site local est ensuite disponible sur l'URL affichee par Next.js, en general `http://localhost:3000`.

## Scripts utiles

Depuis `frontend/` :

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

## Configuration

Copier le fichier d'exemple puis adapter les valeurs :

```bash
cp .env.example .env
```

Variables disponibles :

| Variable | Description | Exemple |
| --- | --- | --- |
| `NEXT_PUBLIC_OPEN_TO_WORK` | Affiche ou masque le statut open to work | `false` |
| `NEXT_PUBLIC_SHOW_PHONE` | Affiche ou masque le numero de telephone | `true` |
| `ANALYTICS_PASSWORD` | Mot de passe de la page `/stats` | `replace-with-a-long-random-password` |
| `ANALYTICS_SECURE_COOKIE` | Cookie analytics marque secure en HTTPS | `true` en prod |

Le fichier `.env` est ignore par Git. Ne pas commiter de secret.

## Production Docker

Lancer ou reconstruire le stack :

```bash
docker compose up -d --build
```

Verifier les conteneurs :

```bash
docker compose ps
```

Le service `nginx` utilise `expose: "80"` et ne publie pas de port sur l'hote. Le site ne doit pas etre accessible directement depuis Internet via Docker : le point d'entree public est Nginx Proxy Manager.

## Nginx Proxy Manager

Dans Nginx Proxy Manager, le proxy host doit pointer vers le service nginx du stack sur le reseau Docker interne :

- Scheme : `http`
- Forward Hostname / IP : `simnlrxfr-nginx-1` si le projet Compose s'appelle `simnlrxfr`
- Forward Port : `80`
- SSL : Let's Encrypt active

Le conteneur NPM doit etre connecte au reseau Docker du projet, par exemple `simnlrxfr_default`.

Validation attendue cote serveur :

```bash
docker ps
curl http://localhost:4350
```

`docker ps` doit afficher `80/tcp` pour nginx, sans mapping `0.0.0.0:4350->80/tcp`. Le `curl` vers `localhost:4350` doit echouer si le port hote est bien ferme.

## Routes principales

- `/` : page principale
- `/stats` : statistiques de visites protegees par mot de passe
- `/api/visits` : collecte des visites et clics
- `/api/analytics/login` : authentification stats
- `/api/analytics/logout` : deconnexion stats
- `/api/analytics/summary` : resume analytics authentifie
- `/_not-found` : page 404 generee par Next.js

Pour tester la 404 via NPM, utiliser n'importe quelle URL inexistante, par exemple `/page-inconnue`.

## Analytics

Le suivi collecte les visites, les clics principaux, les pages consultees, les referers, quelques informations navigateur et des informations geographiques si elles sont fournies par les headers du proxy/CDN.

L'adresse IP brute n'est pas stockee. Elle est uniquement utilisee cote serveur pour produire un hash.

Les donnees analytics sont conservees dans le volume Docker `analytics_data`, monte dans `/data/analytics`.

## Versionning

La version applicative est definie dans :

- `frontend/package.json`
- `frontend/package-lock.json`
- le footer du site dans `frontend/src/components/Contact.tsx`
- le cache-buster du favicon dans `frontend/src/app/layout.tsx`

Convention recommandee :

- Patch `vX.Y.Z` : correction visuelle ou bug limite
- Minor `vX.Y.0` : nouvelle fonctionnalite ou changement technique notable
- Major `vX.0.0` : changement cassant ou refonte importante

## Checklist avant release

```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
npm audit
cd ..
docker compose build
```

Puis :

```bash
git status
git commit -m "..."
git push origin main
```

