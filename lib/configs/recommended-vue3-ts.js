"use strict";

module.exports = {
  extends: [require.resolve('./recommended'), "plugin:vue/vue3-recommended",],
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    // 整个文件的长度
    "max-lines": [
      "error",
      { max: 1200, skipBlankLines: true, skipComments: true },
    ],
  },
};
