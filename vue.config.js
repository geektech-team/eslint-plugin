module.exports = {
    devServer: {
      proxy: {
        "/v1": {
            "target": "http://localhost:5500",
            "changeOrigin": true
          }
      }
    },
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          data: `@import "@/assets/style/variables.scss";`
        }
      }
    }
  }