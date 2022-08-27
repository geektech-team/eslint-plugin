"use strict";

module.exports = {
  extends: [require.resolve('./recommended-ts'), "plugin:vue/vue3-recommended",],
  rules: {
    // 整个文件的长度
    "max-lines": [
      "error",
      { max: 1200, skipBlankLines: true, skipComments: true },
    ],
  },
};
