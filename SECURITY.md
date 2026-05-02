# Security Policy

## Versions supportees

Seule la derniere version publiee sur `main` est maintenue.

| Version | Support |
| --- | --- |
| `main` / derniere release | Oui |
| Anciennes versions | Non |

## Signaler une vulnerabilite

Merci de ne pas ouvrir d'issue publique pour une vulnerabilite.

Pour signaler un probleme de securite, creer une issue dans ce repo.

Inclure si possible :

- une description courte du probleme ;
- les etapes de reproduction ;
- l'impact potentiel ;
- l'URL ou la route concernee ;
- toute preuve de concept minimale, sans exploitation destructive.

Une reponse sera faite des que possible. Les corrections critiques sont traitees en priorite.

## Perimetre

Le perimetre concerne :

- le site public `simnlrx.fr` ;
- les routes API du projet ;
- la page protegee `/stats` ;
- la configuration Docker/Nginx fournie dans ce depot.

Hors perimetre :

- attaques par deni de service ;
- brute force agressif ;
- social engineering ;
- tests destructifs ;
- acces a des comptes ou services tiers non lies au depot.

## Bonnes pratiques du projet

- Les secrets sont stockes dans `.env`, ignore par Git.
- Un fichier `.env.example` documente les variables attendues sans secret.
- Le service nginx du compose n'expose pas de port hote ; il est uniquement disponible sur le reseau Docker interne.
- Le point d'entree public doit rester Nginx Proxy Manager avec HTTPS et Let's Encrypt.
- La page `/stats` est protegee par `ANALYTICS_PASSWORD`.
- En production, `ANALYTICS_SECURE_COOKIE=true` doit etre active.
- Les IP brutes ne sont pas stockees dans les analytics.
- Les dependances sont verifiees avec `npm audit`.

## Donnees analytics

Les analytics servent uniquement a comprendre l'usage du site : visites, pages, referers, clics et informations navigateur/proxy.

Les donnees sont stockees dans le volume Docker `analytics_data`. L'adresse IP brute n'est pas conservee ; elle sert uniquement a produire un hash cote serveur.

## Deploiement securise

Avant une mise en production :

```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
npm audit
cd ..
docker compose build
```

Verifier aussi que nginx n'est pas publie sur l'hote :

```bash
docker ps
curl http://localhost:4350
```

Le port `4350` doit etre ferme, et le site doit rester accessible uniquement via le domaine public servi par Nginx Proxy Manager.

