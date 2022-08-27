const { RuleTester } = require('eslint');

// 获取自定义的规则
const rule = require('../../../lib/rules/no-unfinished-code');

// TESTS
// 加入默认配置
const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021 },
});

const errMsg = (warnWord) =>
  `Your code may contain unfinished code by this word "${warnWord}"`;

ruleTester.run('unfinished-code', rule, {
  valid: [
    '// aaa',
    '// 1111',
    `/**
      * 中文注释
      */`,
  ],
  invalid: [
    {
      code: '// todo: 2021-4-28 test comment',
      errors: [{ message: errMsg('todo') }],
      options: [
        {
          // 通过options 配置自定义参数
          extraKeywords: ['to  do'],
        },
      ],
    },
    {
      code: '// TODO: 2022-5-23 test comment',
      errors: [{ message: errMsg('TODO') }],
    },
    {
      code: `/**
        * ToDo
        * 内容
        */`,
      errors: [{ message: errMsg('ToDo') }],
    },
    {
      code: '// to  do: 2021-4-28 test comment',
      errors: [{ message: errMsg('to  do') }],
      options: [
        {
          // 通过options 配置自定义参数
          extraKeywords: ['to  do'],
        },
      ],
    },
  ],
});
