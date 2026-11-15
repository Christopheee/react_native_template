---
post_title: "Template React Native modulaire"
author1: ""
post_slug: "template-react-native-modulaire"
microsoft_alias: ""
featured_image: ""
categories: []
tags: ["React Native", "TypeScript", "GitHub Copilot"]
ai_note: true
summary: "Architecture, installation et commandes du template React Native."
post_date: "2026-11-15"
---

![CI GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Architecture feature-driven](https://img.shields.io/badge/Architecture-feature--driven-10B981?style=for-the-badge)
![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-skills-8957E5?style=for-the-badge&logo=github-copilot&logoColor=white)

## Présentation

L'objectif du dépôt est de fournir une **application React Native
installable et exécutable**, avec une architecture modulaire, des contrôles de
qualité, des workflows GitHub Actions et des outils pour GitHub Copilot.

Le template comprend un écran de connexion d'exemple et des tests unitaires
et d'intégration. L'API d'authentification utilise une URL de démonstration
qui doit être remplacée pour permettre une connexion réelle.

## Architecture

Les règles de `.dependency-cruiser.cjs` et les instructions du dépôt définissent
une organisation par domaine :

| Chemin cible                      | Responsabilité                             |
| --------------------------------- | ------------------------------------------ |
| `src/app/`                        | Composition et navigation de l'application |
| `src/features/<domaine>/`         | Fonctionnalités métier isolées             |
| `src/features/<domaine>/index.ts` | API publique d'une feature                 |
| `src/shared/`                     | Composants et utilitaires transverses      |
| `src/test/`                       | Infrastructure commune aux tests           |

Règles de dépendances :

- Une feature ne doit pas importer directement une autre feature.
- Depuis l'extérieur d'une feature, utiliser son API publique `index.ts`.
- `src/shared/` ne dépend ni de `src/features/` ni de `src/app/`.
- Une feature ne dépend pas de `src/app/` et les dépendances circulaires sont
  interdites.

Vérifier ces règles avec `npm run arch:check`. Le graphe peut être généré avec
`npm run arch:graph` ou
`npm run arch:json`.

## Prérequis et installation

Utiliser Node.js 24 et npm, comme les workflows CI et CD. Installer les
dépendances :

```shell
npm ci
```

Puis démarrer le serveur de développement Expo :

```shell
npm start
```

Ouvrir ensuite l'application avec Expo Go sur un appareil compatible ou avec
un émulateur configuré. Le démarrage de l'application ne configure pas l'API
d'authentification d'exemple.

## Scripts disponibles

| Commande              | But                                                |
| --------------------- | -------------------------------------------------- |
| `npm start`           | Démarrer le serveur de développement Expo          |
| `npm run lint`        | Lancer ESLint sur les fichiers TypeScript          |
| `npm run typecheck`   | Vérifier les types avec `tsc --noEmit`             |
| `npm run arch:check`  | Vérifier les frontières avec Dependency Cruiser    |
| `npm run arch:graph`  | Générer le graphe Mermaid dans `.ai/architecture/` |
| `npm run arch:json`   | Générer le graphe JSON dans `.ai/architecture/`    |
| `npm test`            | Exécuter les tests Jest                            |
| `npm run test:staged` | Tester les fichiers liés via Jest                  |

## Contrôles locaux et CI

Le hook `.husky/pre-commit` lance lint-staged, `typecheck` et les tests liés
aux fichiers modifiés. `.lintstagedrc.json` applique ESLint/Prettier aux
fichiers TypeScript et Prettier aux fichiers JSON, Markdown et YAML.

Le workflow `.github/workflows/ci.yml` configure Node.js 24 et lance des jobs
de qualité et de tests sur les pushes et pull requests vers `main`, `master`
ou `develop`.

Le workflow `.github/workflows/cd.yml` est également un exemple. Il référence
`EXPO_TOKEN`, mais la commande EAS de build est commentée et l'étape active
affiche un message de configuration. Il ne déploie donc pas encore
l'application.

## Outils pour GitHub Copilot

Les instructions générales se trouvent dans
`.github/copilot-instructions.md`, les règles spécialisées dans
`.github/instructions/`, et les Skills dans `.github/skills/`.
Quelques Skills disponibles :

- `/acquire-codebase-knowledge` : documenter le dépôt.
- `/grill-with-docs` : préciser la conception d'une feature complexe.
- `/tdd` : développer une logique avec une approche test-first.
- `/improve-codebase-architecture` : examiner les frontières et le couplage.
- `/conventional-commit` : préparer un message de commit conventionnel.

Consulter [AGENTS.md](./AGENTS.md) pour les consignes détaillées,
[docs/GLOSSARY.md](./docs/GLOSSARY.md) pour les termes du domaine et
[docs/codebase/](./docs/codebase/) pour une analyse historique du dépôt,
antérieure à l'ajout de l'application et de ses tests.

## Structure actuelle

```text
.
├── .github/
│   ├── instructions/       # Consignes par contexte
│   ├── skills/             # Skills pour les contributions assistées
│   └── workflows/          # Workflows CI et CD
├── .husky/                 # Hook pre-commit
├── docs/
│   ├── codebase/            # Analyse technique du dépôt
│   └── GLOSSARY.md          # Glossaire métier (à compléter)
├── src/                    # Application, features, code partagé et tests
├── .dependency-cruiser.cjs # Règles d'architecture
├── AGENTS.md               # Consignes de contribution
├── package.json            # Outils et scripts disponibles
└── README.md
```

## État et prochaines étapes

Avant une utilisation réelle, configurer l'API d'authentification et adapter le
workflow de déploiement aux besoins du projet.
