import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,

  schema: 'http://localhost:1337/graphql',

  ignoreNoDocuments: true,

  config: {
    avoidOptionals: {
      field: true,
      inputValue: false
    },

    namingConvention: {
      enumValues: 'keep',
      typeNames: 'keep'
    },

    nonOptionalTypename: true,
    defaultScalarType: 'any',

    extractAllFieldsToTypes: true,

    printFieldsOnNewLines: true,

    fragmentSuffix: '',
    inlineFragmentTypes: 'combine',

    maybeValue: 'T | null',
    inputMaybeValue: 'T | null | undefined',

    useTypeImports: true
  },

  generates: {
    // BASE TYPES (central)
    './src/graphql/generated-test/types.ts': {
      plugins: ['typescript']
    },

    // fragments
    './src/graphql/generated-test/fragments/': {
      preset: 'near-operation-file',
      documents: ['src/graphql/fragments/*.{ts,tsx}'],
      presetConfig: {
        baseTypesPath: '../types.ts',
        extension: '.ts',
        folder: '__generated__',
        filePerOperation: true
      },
      plugins: ['typescript-operations', 'typed-document-node']
    },

    // queries
    './src/graphql/generated-test/queries/': {
      preset: 'near-operation-file',
      documents: [
        'src/graphql/queries/*.{ts,tsx}',
        'src/graphql/fragments/*.{ts,tsx}'
      ],
      presetConfig: {
        baseTypesPath: '../types.ts',
        extension: '.ts',
        folder: '__generated__',
        filePerOperation: true
      },
      plugins: ['typescript-operations', 'typed-document-node']
    },

    // mutations
    './src/graphql/generated-test/mutations/': {
      preset: 'near-operation-file',
      documents: [
        'src/graphql/mutations/*.{ts,tsx}',
        'src/graphql/fragments/*.{ts,tsx}'
      ],
      presetConfig: {
        baseTypesPath: '../types.ts',
        extension: '.ts',
        folder: '__generated__',
        filePerOperation: true
      },
      plugins: ['typescript-operations', 'typed-document-node']
    }
  }
}

export default config
