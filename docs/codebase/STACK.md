---
post_title: "Pile technique"
author1: ""
post_slug: "codebase-stack"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Technologies et commandes effectivement déclarées dans le dépôt."
post_date: "2026-11-15"
---

## Résumé

Le dépôt contient des outils de développement Node.js/npm, mais pas encore
d'application React Native exécutable. Les workflows CI utilisent Node.js 20.
Le manifeste ne déclare que des dépendances de développement.

## Runtime et outils

| Domaine                 | Valeur                                                                          | Preuve                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Langages dans le dépôt  | JavaScript et Python pour les outils ; aucun code applicatif TypeScript détecté | `.dependency-cruiser.js`, `.github/skills/acquire-codebase-knowledge/scripts/scan.py`, `src/` |
| Runtime CI              | Node.js 20                                                                      | `.github/workflows/ci.yml`                                                                    |
| Gestionnaire de paquets | npm ; lockfile v3                                                               | `package-lock.json`                                                                           |
| Application mobile      | [TODO] React Native/Expo ne sont pas déclarés dans le manifeste                 | `package.json`                                                                                |
| Compilation             | [TODO] Aucun outil de compilation applicatif déclaré                            | `package.json`                                                                                |

## Dépendances importantes

| Dépendance                         |             Version déclarée | Rôle                                             | Preuve         |
| ---------------------------------- | ---------------------------: | ------------------------------------------------ | -------------- |
| `dependency-cruiser`               |                    `^18.7.2` | Vérification et génération du graphe des imports | `package.json` |
| `eslint`                           |                   `^10.15.0` | Lint                                             | `package.json` |
| `husky`                            |                     `^9.1.7` | Hooks Git                                        | `package.json` |
| `lint-staged`                      |                    `^17.6.0` | Contrôles sur fichiers indexés                   | `package.json` |
| `madge`                            |                     `^8.0.0` | Analyse des dépendances                          | `package.json` |
| `prettier`                         |                    `^3.10.1` | Formatage de fichiers ciblés                     | `package.json` |
| `knip`, `repomix`, `type-coverage` | Versions dans `package.json` | Outils de maintenance/analyse                    | `package.json` |

React Native, Expo, TypeScript, Jest et React Native Testing Library ne figurent
pas parmi les dépendances déclarées dans `package.json`.

## Commandes disponibles

```shell
npm install
npm run lint
npm run typecheck
npm run arch:check
npm run arch:graph
npm run arch:json
npm run test:staged
```

Le manifeste ne définit pas `start`, `test`, `build` ni `ci`. Les commandes
nécessitant TypeScript, Jest ou une application mobile ne sont donc pas
documentées comme des parcours d'exécution disponibles.

## Configuration et environnement

- Configuration npm : `package.json` et `package-lock.json`.
- CI : `.github/workflows/ci.yml` et `.github/workflows/cd.yml`.
- Variables documentées : `EXPO_TOKEN` est référencé par le workflow CD.
- Fichier `.env.example` ou `.env.template` : absent selon le scan.
- Configuration TypeScript : [TODO] aucun `tsconfig.json` du projet détecté.

## Preuves

- `package.json`
- `package-lock.json`
- `.github/workflows/ci.yml`
- `.github/workflows/cd.yml`
- `.dependency-cruiser.js`
- `.github/skills/acquire-codebase-knowledge/scripts/scan.py`
- `src/`
