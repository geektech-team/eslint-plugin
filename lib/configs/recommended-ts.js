"use strict";

module.exports = {
  extends: [require.resolve('./recommended'),],
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    "comma-dangle": ["error", "never"],
  },
};
