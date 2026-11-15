---
post_title: "Modèle de pull request"
author1: ""
post_slug: "pull-request-template"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Contexte et contrôles de qualité pour les pull requests."
post_date: "2026-11-15"
---

## Description & contexte

<!-- Décrire le changement et son contexte. -->

Issue GitHub / ADR associée : <!-- lien ou sans objet -->

## Type de changement

- [ ] feat
- [ ] fix
- [ ] refactor
- [ ] test
- [ ] ci/cd
- [ ] docs

## Checklist architecture & qualité

- [ ] Aucune violation d'architecture : `npm run arch:check` passe sans erreur.
- [ ] Typage strict respecté : `npm run typecheck` passe, sans `any` injustifié.
- [ ] Linting validé : `npm run lint`. Formatage vérifié séparément si nécessaire.
- [ ] Tests unitaires / d'intégration (RNTL) ajoutés ou mis à jour :
      `npm test` passe.
- [ ] Graphes d'architecture (`.ai/architecture/`) et `docs/GLOSSARY.md` mis à
      jour si nécessaire.

<!-- Signaler toute vérification impossible ou sans objet et expliquer pourquoi. -->
