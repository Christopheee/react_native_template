const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactNativePlugin = require('eslint-plugin-react-native');

module.exports = defineConfig([
  // 1. Base Expo / React Native / TypeScript
  expoConfig,

  // 2. Intégration Prettier (désactive les règles de formatage conflictuelles)
  eslintPluginPrettierRecommended,

  // 3. Ignorer les dossiers générés et natifs
  {
    ignores: [
      'node_modules/**',
      'android/**',
      'ios/**',
      '.expo/**',
      'dist/**',
      'coverage/**',
      '.ai/**',
    ],
  },

  // 4. Règles strictes TypeScript, React Native & Architecture
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-native': reactNativePlugin,
    },
    rules: {
      // --- TypeScript Strict (Esprit Matt Pocock) ---
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // --- Bonnes Pratiques React Native ---
      'react-native/no-unused-styles': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn', // Force l'utilisation de @shared/theme/tokens
      'react-native/no-raw-text': 'off', // À activer selon ton design system

      // --- Garde-fous d'architecture dans l'IDE ---
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@features/*/*', '../features/*/*'],
              message:
                "Importez uniquement depuis l'API publique de la feature (@features/<nom>), jamais depuis ses sous-dossiers internes.",
            },
          ],
        },
      ],
    },
  },

  // 5. Assouplissements ciblés pour les fichiers de tests
  {
    files: ['**/*.{test,spec}.{ts,tsx}', 'src/test/**/*'],
    rules: {
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
    },
  },
]);