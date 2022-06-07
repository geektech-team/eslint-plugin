# Eslint Config

## Usage

在你的 .eslintrc.js，加入

### 纯js项目

```js
module.exports = {
  extends: ['plugin:@geektech/recommended']
}
```

```bash
npx eslint ./src/**/*.{js,jsx} --fix
```

### vue3 + ts项目

```js
module.exports = {
  extends: ['plugin:@geektech/recommended-vue3-ts']
}
```

```bash
npx eslint ./src/**/*.{vue,ts} --fix
```
