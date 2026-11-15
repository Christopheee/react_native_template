---
post_title: "Instructions globales Copilot"
author1: ""
post_slug: "copilot-instructions"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Règles quotidiennes de développement et frontières d'architecture."
post_date: "2026-11-15"
---

## Règles quotidiennes

- Utiliser TypeScript strict et les termes de
  [docs/GLOSSARY.md](../docs/GLOSSARY.md) ; respecter les ADR de `docs/adr/`.
- Ne jamais importer directement une feature depuis une autre feature : placer
  le code commun dans `src/shared/`.
- Depuis l'extérieur d'une feature, importer uniquement son API publique
  `src/features/<domaine>/index.ts`, jamais ses fichiers internes.
- `src/shared/` ne dépend ni de `src/features/` ni de `src/app/` ; une feature
  ne dépend pas de `src/app/`. Éviter les dépendances circulaires.
- Après toute création ou tout déplacement de fichier dans `src/`, ainsi
  qu'après un refactoring d'imports, exécuter `npm run arch:check`. Si la
  structure des modules évolue, créer `.ai/architecture/` si nécessaire, puis
  exécuter `npm run arch:graph` et `npm run arch:json` pour actualiser les
  graphes Mermaid et JSON.
- Signaler les validations impossibles ou en échec. La liste complète des
  commandes et des skills figure dans [AGENTS.md](../AGENTS.md).
- Les règles détaillées par type de fichier sont appliquées automatiquement
  depuis `.github/instructions/` ; ne pas les recopier ici.