export default {
  testEnvironment: 'jest-fixed-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(msw|@mswjs|until-async|rettime|@open-draft)/)'
  ]
}
