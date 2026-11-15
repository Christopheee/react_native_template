---
post_title: "Conventions de développement"
author1: ""
post_slug: "codebase-conventions"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Règles configurées pour les contributions et leurs limites actuelles."
post_date: "2026-11-15"
---

## Nommage

| Élément                      | Convention connue | Exemple/preuve                                                   |
| ---------------------------- | ----------------- | ---------------------------------------------------------------- |
| Skills et dossiers de Skills | kebab-case        | `.github/skills/acquire-codebase-knowledge/`                     |
| Fichiers applicatifs         | [TODO]            | Aucun fichier source applicatif détecté                          |
| Fonctions et types           | [TODO]            | Aucun code TypeScript applicatif détecté                         |
| Variables d'environnement    | [TODO]            | Pas de modèle `.env` ; `EXPO_TOKEN` apparaît dans le workflow CD |

## Lint et formatage

- Linter déclaré : ESLint ; commande `npm run lint`.
- Formateur déclaré : Prettier, invoqué par lint-staged pour certains fichiers.
- Le manifeste ne contient pas de dépendance TypeScript, mais expose
  `npm run typecheck`.
- Le scan ne détecte pas de configuration ESLint ou Prettier à la racine.
- `.lintstagedrc.json` fait tourner ESLint puis Prettier sur les fichiers
  TypeScript indexés ; Prettier est exécuté pour JSON, Markdown et YAML.
- [TODO] Règles ESLint effectives et options TypeScript : configurations
  absentes.

## Imports et modules

- Les règles de `.dependency-cruiser.js` interdisent les imports croisés entre
  features, les cycles et les imports d'implémentations internes de features.
- Les imports externes d'une feature doivent passer par son `index.ts`.
- Les alias `@features/*` et `@shared/*` sont évoqués dans la configuration,
  mais leur résolution dépend d'un `tsconfig.json` absent.

## Erreurs, logs et sécurité

- Gestion des erreurs et conventions de journalisation applicatives : [TODO],
  aucun code d'application n'est présent.
- `.github/instructions/security-and-owasp.instructions.md` fournit des
  recommandations, mais ne prouve pas l'implémentation de protections dans
  une application.

## Tests

- Le hook pre-commit appelle `npm run test:staged`.
- La CI appelle `npm test -- --ci --coverage --passWithNoTests`.
- Aucun script `test`, configuration Jest ou test applicatif n'est présent.
- Voir [TESTING.md](./TESTING.md) pour les limites vérifiées.

## Preuves

- `package.json`
- `.lintstagedrc.json`
- `.husky/pre-commit`
- `.dependency-cruiser.js`
- `.github/instructions/security-and-owasp.instructions.md`
