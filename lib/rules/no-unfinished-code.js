module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Not allowed unfinished code', // 规则的简述
      category: 'Stylistic Issues', // 规则分类
      recommended: true, //  配置文件中的 "extends": "eslint:recommended"属性是否启用该规则
    },
    schema: [
      // 指定该选项 这样的 ESLint 可以避免无效的规则配置
      // 遵循 json schema 后文会有介绍文档
      {
        keyWords: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    ],
  },
  create: function (context) {
    // context对象包含与规则上下文相关的信息
    // 返回一个SourceCode对象，你可以使用该对象处理传递给 ESLint 的源代码
    const sourceCode = context.getSourceCode();
    // 取得设置的
    let extraKeywords = [];
    const [argv0] = context.options;
    if (argv0?.extraKeywords?.length) {
      extraKeywords = argv0?.extraKeywords;
    }
    // 定义不被允许出现在注释中的内容
    const todoWords = [
      'todo',
      'to do',
      'TODO',
      'TO DO',
      'ToDo',
      'To Do',
      ...extraKeywords,
    ];
    return {
      Program(node) {
        // 获取所有注释的节点
        const comments = sourceCode.getAllComments();
        // 遍历注释节点判断是否有不符合规范的
        comments.forEach((comment) => {
          let { loc, value, type } = comment;
          let warnWord = '';
          // 判断注释内容是否包含不被允许的word
          for (const word of todoWords) {
            if (value.includes(word)) {
              warnWord = word;
              break;
            }
          }

          if (warnWord) {
            context.report({
              node: comment, // 可选 与问题有关的 AST 节点
              message: `Your code may contain unfinished code by this word "${warnWord}"`, // 有问题发出的消息
            });
          }
        });
      },
    };
  },
};
