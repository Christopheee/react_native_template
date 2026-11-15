---
post_title: "Architecture observée et cible"
author1: ""
post_slug: "codebase-architecture"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Séparation entre les règles d'architecture projetées et le code présent."
post_date: "2026-11-15"
---

## Style architectural

- Architecture cible : orientée domaine/feature, avec une couche `shared`
  indépendante et une couche `app` de composition/navigation.
- État observé : aucune feature, navigation ou couche métier n'est encore
  implémentée dans `src/`.
- La configuration Dependency Cruiser formalise des règles de frontières,
  mais ne constitue pas à elle seule une architecture d'exécution.

## Flux système

Flux applicatif : [TODO] aucun flux d'exécution ne peut être suivi, faute de
point d'entrée et de code applicatif.

Flux de validation visible :

1. GitHub Actions récupère le dépôt.
2. Le workflow CI configure Node.js 20 et installe les dépendances npm.
3. Le job qualité lance lint, vérification TypeScript et contrôle
   Dependency Cruiser.
4. Le job de test lance `npm test`.
5. Le hook local `pre-commit` lance lint-staged, `typecheck` et les tests liés.

Les étapes CI impliquant TypeScript/Jest sont configurées, mais leurs outils
et configurations ne sont pas tous déclarés ou présents.

## Responsabilités prévues

| Module                | Responsabilité cible                 | Contrainte déclarée                                   | Preuve                   |
| --------------------- | ------------------------------------ | ----------------------------------------------------- | ------------------------ |
| `src/app/`            | Navigation et composition            | Ne pas être importé par `shared` ou les features      | `.dependency-cruiser.js` |
| `src/features/<nom>/` | Logique d'un domaine                 | Pas d'import direct depuis une autre feature ou `app` | `.dependency-cruiser.js` |
| `src/shared/`         | Code transverse                      | Ne dépendre ni des features ni de `app`               | `.dependency-cruiser.js` |
| `src/test/`           | Configuration et utilitaires de test | [TODO] conventions d'implémentation non présentes     | `AGENTS.md`              |

## Risques architecturaux connus

- Les règles attendent des chemins et des alias TypeScript qui ne sont pas
  actuellement configurés dans le dépôt.
- Le graphe d'architecture mentionné dans la documentation n'est pas présent
  dans l'arborescence analysée.
- Aucune donnée ni intégration applicative ne permet de décrire un flux
  domaine réel.

## Preuves

- `.dependency-cruiser.js`
- `AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/workflows/ci.yml`
- `src/`
- `package.json`
