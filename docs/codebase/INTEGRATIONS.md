---
post_title: "Intégrations externes"
author1: ""
post_slug: "codebase-integrations"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Services externes et comportements d'intégration visibles dans la configuration."
post_date: "2026-11-15"
---

## Inventaire

| Système                     | Type                 | Usage visible                                              | Authentification                    | Preuve                                                 |
| --------------------------- | -------------------- | ---------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| GitHub Actions              | CI/CD                | Jobs de qualité, tests et workflow CD                      | Secrets GitHub mentionnés pour Expo | `.github/workflows/ci.yml`, `.github/workflows/cd.yml` |
| Expo EAS                    | Déploiement envisagé | Étape setup illustrative ; aucune commande de build active | `EXPO_TOKEN` référencé              | `.github/workflows/cd.yml`                             |
| API, base de données, queue | [TODO]               | Aucune intégration applicative détectée                    | [TODO]                              | `package.json`, `src/`                                 |

## Données et secrets

- Aucun stockage de données applicatif détecté.
- Le workflow CD lit `secrets.EXPO_TOKEN`; aucun secret n'est inscrit en dur
  dans ce workflow.
- Aucun fichier `.env.example` ou `.env.template` n'a été détecté.
- Rotation et cycle de vie des secrets : [TODO].

## Fiabilité et observabilité

- Retry, timeouts, circuit breaker et logs applicatifs : [TODO], aucun appel
  réseau applicatif n'a été trouvé.
- La CI configure une concurrence par workflow/référence et annule les runs
  obsolètes.
- Métriques et tracing applicatifs : [TODO].

## Preuves

- `.github/workflows/ci.yml`
- `.github/workflows/cd.yml`
- `package.json`
- `package.json`
- `src/`
