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
    // 关闭尾部的逗号校验
    'comma-dangle': 'off',
  },
};
