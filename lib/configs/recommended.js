'use strict';
/**
 * Level
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code will be 1)
 *
 * Options
 * "always" - Always apply this rule
 * "never" - Never apply this rule
 */

module.exports = {
  extends: [require.resolve('./base'), 'eslint-config-standard'],
  rules: {
    // 分号
    semi: ['error', 'always'],
    // ===
    eqeqeq: ['error', 'always'],
    // 单引号
    quotes: ['error', 'single'],
    // 整个文件的长度
    'max-lines': [
      'error',
      { max: 500, skipBlankLines: true, skipComments: true },
    ],
    // 有多少层if else嵌套
    'max-depth': ['error', 4],
    // 单行代码的长度
    'max-len': [
      'error',
      {
        code: 200,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // function的长度
    'max-lines-per-function': [
      'error',
      {
        max: 120,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    // 有多少层回调
    'max-nested-callbacks': ['error', 4],
    // function多少个请求参数
    'max-params': ['error', 4],
    // 禁止三目运算符嵌套
    'no-nested-ternary': 'error',
    // 警告未完成的代码
    '@geektech/no-unfinished-code': 'warn'
  },
};
