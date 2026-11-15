---
post_title: "Structure du dépôt"
author1: ""
post_slug: "codebase-structure"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Répertoires et points d'entrée réellement présents."
post_date: "2026-11-15"
---

## Carte des répertoires

| Chemin                  | Rôle observable                                     | Preuve                     |
| ----------------------- | --------------------------------------------------- | -------------------------- |
| `.github/instructions/` | Instructions Markdown, React, sécurité et workflows | `.github/instructions/`    |
| `.github/skills/`       | Skills documentés pour les tâches d'ingénierie      | `.github/skills/`          |
| `.github/workflows/`    | Workflows GitHub Actions CI et CD                   | `.github/workflows/ci.yml` |
| `.husky/`               | Hook `pre-commit`                                   | `.husky/pre-commit`        |
| `docs/`                 | Glossaire et documentation du codebase              | `docs/GLOSSARY.md`         |
| `docs/codebase/`        | Documentation générée pour cette analyse            | `docs/codebase/`           |
| `src/`                  | Répertoire présent, sans fichiers sources détectés  | `src/`                     |

À la racine se trouvent notamment `README.md`, `AGENTS.md`, `package.json`,
`package-lock.json`, `.dependency-cruiser.js` et `skills-lock.json`.

## Points d'entrée

- Point d'entrée applicatif : [TODO] aucun détecté.
- Commande de démarrage : [TODO] aucun script `start` dans `package.json`.
- Entrées CI/CD : les workflows sous `.github/workflows/`.
- Le workflow CD est manuel ou déclenché par push sur `main`/tag `v*`, mais
  son étape de build est actuellement un exemple/commentaire.

## Frontières de modules

La structure cible décrite dans `README.md`, `AGENTS.md` et
`.dependency-cruiser.js` prévoit :

- `src/app/` pour navigation et composition ;
- `src/features/<domaine>/` pour les fonctionnalités et leurs API publiques ;
- `src/shared/` pour les éléments communs ;
- `src/test/` pour les utilitaires de test.

Ces sous-répertoires ne sont pas présents dans les fichiers détectés. Ce sont
des conventions cibles, pas des modules actuellement implémentés.

## Conventions de nommage

- Les noms de Skills et de répertoires sous `.github/skills/` utilisent le
  kebab-case.
- La convention des fichiers applicatifs est [TODO] : aucun fichier source
  applicatif n'est présent pour la confirmer.
- Les alias TypeScript mentionnés dans `.dependency-cruiser.js` dépendent d'un
  `tsconfig.json` qui n'est pas présent.

## Preuves

- `src/`
- `.github/`
- `AGENTS.md`
- `.dependency-cruiser.js`
- `package.json`
- `.github/workflows/ci.yml`
