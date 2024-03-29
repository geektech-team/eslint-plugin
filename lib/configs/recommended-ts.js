'use strict';

module.exports = {
  extends: [
    require.resolve('./recommended'),
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: "latest",
    sourceType: 'module',
  },
};
