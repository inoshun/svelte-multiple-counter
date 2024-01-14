module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  // ...
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ...
    extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    // ...
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
