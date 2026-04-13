import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'import/no-anonymous-default-export': 'off',
      '@next/next/no-img-element': 'warn'
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
    'next-env.d.ts',
    'node_modules/**',
    '!.storybook',
    '!.jest',
    'generators',
    'src/stories/**'
  ]),
  ...storybook.configs['flat/recommended']
])
