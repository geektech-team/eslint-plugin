"use strict";

module.exports = {
  configs: {
    recommended: require("./configs/recommended"),
    "recommended-vue3-ts": require("./configs/recommended-vue3-ts"),
  },
  rules: {
    'no-unfinished-code': require('./rules/no-unfinished-code'),
  },
};
