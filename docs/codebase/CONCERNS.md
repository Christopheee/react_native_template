---
post_title: "Risques et limites connus"
author1: ""
post_slug: "codebase-concerns"
microsoft_alias: ""
featured_image: ""
categories: []
tags: []
ai_note: true
summary: "Écarts vérifiables entre la configuration et une application utilisable."
post_date: "2026-11-15"
---

## Principaux risques

| Niveau | Sujet                                                                                                             | Preuve                                               | Impact                                                                      |
| ------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| Élevé  | Le dépôt ne contient pas l'application React Native décrite comme prête pour la production                        | `src/` vide ; dépendances absentes de `package.json` | Installation possible, mais pas de parcours applicatif déclaré              |
| Élevé  | La CI appelle un script `test` non défini et ne déclare pas Jest                                                  | `package.json`, `.github/workflows/ci.yml`           | Le job de tests est susceptible d'échouer avant d'exécuter des tests        |
| Moyen  | Les scripts `lint` et `typecheck` sont définis sans config/source TypeScript visible et sans `typescript` déclaré | `package.json`, scan                                 | Les validations ne sont pas complètes tant que le socle n'est pas configuré |
| Moyen  | Le workflow CD est un squelette ; il n'exécute aucun build ou déploiement EAS                                     | `.github/workflows/cd.yml`                           | Un push/tag ne produit pas de livrable mobile                               |
| Faible | Pas de graphe `.ai/architecture/` présent                                                                         | Scan de l'arborescence                               | La documentation d'architecture générée n'est pas disponible                |

## Dette technique

- Compléter le manifeste et les fichiers de configuration si le but est un
  projet mobile exécutable.
- Aligner les workflows CI et le hook local avec les scripts et dépendances
  réellement disponibles.
- Remplacer les descriptions de fonctionnalités cibles par des éléments
  implémentés lors de l'ajout du code applicatif.

## Sécurité

- Aucun code applicatif ni intégration contenant des données utilisateur n'a
  été détecté ; l'audit de sécurité applicative est donc [TODO].
- Des instructions de codage sécurisé existent dans `.github/instructions/`,
  mais elles ne garantissent pas une implémentation ou des contrôles actifs.
- Aucun outil/configuration de sécurité automatisée n'a été détecté par le scan.

## Performance, historique et fragilité

- Aucun code d'exécution applicatif ne permet d'identifier un problème de
  performance.
- Le scan n'a trouvé aucun historique Git exploitable ; les zones à fort churn
  sont [TODO].
- Le fichier le plus volumineux source/config indiqué par le scan est
  `package-lock.json` (173 Ko), qui est un lockfile généré et non un module
  applicatif.

## Intention et réalité

L'objectif confirmé est de fournir une application React Native installable
et exécutable. La réalité actuelle est un squelette de configuration sans
code applicatif ni dépendances React Native/Expo. Cet écart est la priorité
principale avant de présenter le dépôt comme une application utilisable.

## Preuves

- `package.json`
- `src/` (aucun fichier source détecté)
- `.github/workflows/ci.yml`
- `.github/workflows/cd.yml`
- `.husky/pre-commit`
- `package.json`
- `src/`
