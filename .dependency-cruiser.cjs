/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    // 1. RÈGLE D'OR : Interdiction des imports entre features différentes
    {
      name: 'no-cross-feature-imports',
      severity: 'error',
      comment:
        'Une feature ne doit pas importer directement depuis une autre feature. Déplacez le code commun dans src/shared/.',
      from: {
        path: '^src/features/([^/]+)/',
      },
      to: {
        path: '^src/features/([^/]+)/',
        pathNot: '^src/features/$1/', // Autorise uniquement les imports internes à la même feature
      },
    },

    // 2. ENCAPSULATION : Forcer l'import via le fichier index.ts de la feature
    {
      name: 'enforce-feature-public-api',
      severity: 'error',
      comment:
        "Importez uniquement depuis la racine de la feature (src/features/<nom>) via son index.ts, pas depuis ses fichiers internes.",
      from: {
        pathNot: '^src/features/([^/]+)/',
      },
      to: {
        path: '^src/features/[^/]+/.+',
        pathNot: '^src/features/[^/]+/index\\.(ts|tsx)$',
      },
    },

    // 3. HIÉRARCHIE : src/shared ne doit jamais dépendre de features ou de src/app
    {
      name: 'shared-must-remain-independent',
      severity: 'error',
      comment:
        'src/shared/ est la couche basse et ne doit jamais importer depuis src/features/ ou src/app/.',
      from: {
        path: '^src/shared/',
      },
      to: {
        path: '^src/(features|app)/',
      },
    },

    // 4. HIÉRARCHIE : Les features ne doivent pas importer depuis la couche navigation (src/app)
    {
      name: 'features-cannot-import-app',
      severity: 'error',
      comment:
        'Une feature ne doit pas dépendre de la couche de routing/navigation (src/app/).',
      from: {
        path: '^src/features/',
      },
      to: {
        path: '^src/app/',
      },
    },

    // 5. HYGIÈNE : Interdiction des dépendances circulaires
    {
      name: 'no-circular',
      severity: 'error',
      comment: 'Dépendance circulaire détectée. Refactorisez pour casser la boucle.',
      from: {},
      to: {
        circular: true,
      },
    },

    // 6. HYGIÈNE : Détection des fichiers orphelins (non utilisés)
    {
      name: 'no-orphans',
      severity: 'warn',
      comment: 'Ce fichier n’est importé nulle part.',
      from: {
        orphan: true,
        pathNot: [
          '(^|/)\\.[^/]+\\.(js|cjs|mjs|ts|json)$', // Fichiers de config cachés
          '\\.d\\.ts$',                             // Déclarations TypeScript
          '(^|/)tsconfig\\.json$',
          '^src/app/',                              // Points d'entrée Expo Router / Navigation
          '\\.(test|spec)\\.(ts|tsx)$',             // Fichiers de tests
          '^src/test/',                             // Setup de tests
        ],
      },
      to: {},
    },
  ],

  options: {
    // Résolution des Path Aliases (@features/*, @shared/*) via tsconfig.json
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    tsPreCompilationDeps: true,

    // Ignorer node_modules et dossiers natifs
    doNotFollow: {
      path: 'node_modules',
    },
    exclude: {
      path: ['node_modules', 'android', 'ios', '.expo', 'coverage'],
    },

    // Options de rendu pour le graphe destiné à l'IA (Mermaid / JSON)
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
      mermaid: {
        minify: false,
      },
    },
  },
};