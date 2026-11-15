---
post_title: "Instructions pour les agents"
author1: ""
post_slug: "agents"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Architecture cible, validations et skills du projet."
post_date: "2026-11-15"
---

## Projet et architecture

Le projet vise une application React Native en TypeScript strict, organisée par
domaine :

- `src/app/` : navigation et composition de l'application.
- `src/features/<domaine>/` : features isolées, avec une API publique `index.ts`.
- `src/shared/` : code commun indépendant des features et de `src/app/`.
- `src/test/` : infrastructure de test partagée.

Respecter les frontières décrites dans
[les instructions Copilot](.github/copilot-instructions.md) et contrôlées par
[Dependency Cruiser](.dependency-cruiser.cjs).

Consulter [le glossaire métier](docs/GLOSSARY.md) pour nommer les concepts et
`docs/adr/` pour les décisions existantes. Le glossaire est actuellement vide
et le dossier des ADR n'existe pas encore. Avant un changement architectural
majeur, consulter `.ai/architecture/dependency-graph.json` s'il existe ; sinon,
signaler son absence et le générer avec `npm run arch:json` lorsque le projet est
configuré.

## Validation avant de terminer

Exécuter les commandes suivantes et signaler explicitement tout échec ou blocage :

```shell
npm run lint
npm run typecheck
npm run arch:check
npm test
```

Ne pas présenter une commande indisponible ou en échec comme une validation
réussie. `npm run lint` exécute ESLint ; il ne vérifie pas actuellement le
formatage Prettier.
Pour les changements de structure dans `src/`, suivre aussi les règles de
génération du graphe dans les instructions Copilot.

## Skills du dépôt

Les skills marqués **manuel** désactivent l'invocation automatique : demander
à l'utilisateur de les lancer explicitement avec la commande indiquée.

- `/acquire-codebase-knowledge` : cartographier ou documenter le dépôt à la
  demande, ou préparer l'intégration d'un contributeur.
- `/ai-ready` : préparer la configuration du dépôt pour des contributions IA ;
  ce skill demande à l'utilisateur d'installer et de revoir sa version complète.
- `/codebase-design` : concevoir une interface de module ou identifier une
  meilleure séparation et des points de test.
- `/conventional-commit` : préparer un message de commit conventionnel.
- `/create-github-action-workflow-specification` : spécifier un workflow GitHub
  Actions existant pour sa maintenance.
- `/diagnosing-bugs` : diagnostiquer un bogue, une panne ou une régression de
  performance.
- `/domain-modeling` : préciser les termes métier, le glossaire ou une ADR.
- `/github-actions-efficiency` : auditer les coûts et la durée de GitHub Actions.
- `/grill-me` (**manuel**) : approfondir un plan ou une conception par entretien.
- `/grill-with-docs` (**manuel**) : avant une feature complexe, approfondir la
  conception en tenant compte du glossaire et des ADR.
- `/implement` (**manuel**) : réaliser un travail défini par une spécification
  ou des tickets.
- `/implement-spec` (**manuel**) : implémenter une spécification et ses tickets.
- `/improve-codebase-architecture` (**manuel**) : analyser les possibilités de
  refactoring architectural et approfondir une option retenue.
- `/javascript-typescript-jest` : écrire ou modifier des tests Jest en
  JavaScript ou TypeScript.
- `/setup-matt-pocock-skills` (**manuel**) : configurer une première fois le
  suivi des issues, les labels et les documents métier pour les skills concernés.
- `/tdd` : développer une nouvelle logique métier ou un composant critique par
  cycles de tests, ou pratiquer le développement test-first.
- `/to-questionnaire` (**manuel**) : transformer une décision à éclaircir en
  questionnaire destiné à un tiers.
- `/to-spec` (**manuel**) : synthétiser la conversation en spécification et la
  publier dans le suivi des issues configuré.
- `/to-tickets` (**manuel**) : découper un plan ou une spécification en tickets
  avec leurs dépendances dans le suivi configuré.
