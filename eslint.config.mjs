import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    languageOptions: {
      globals: globals.browser
    }
  },

  prettier,

  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'import/no-anonymous-default-export': 'off',
      '@next/next/no-img-element': 'warn',
      'react-hooks/set-state-in-effect': 'off'
    }
  },

  {
    files: ['**/test.{ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off'
    }
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'public/sw.js',
    'public/workbox-*.js',
    'next-env.d.ts',
    'node_modules/**',
    '!.storybook',
    '!.jest',
    'src/stories/**',
    'generators',
    'src/graphql/generated/**',
    'src/graphql/generated-test/**',
    'src/graphql/**/__generated__/**'
  ]),

  ...storybook.configs['flat/recommended']
])
