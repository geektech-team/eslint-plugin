# Eslint Config

## Usage

在你的 .eslintrc.js，加入

```js
modules.export = {
    "extends": ["plugin:@geektech/recommended"]
}
```

```bash
npx eslint ./src/**/*.{vue,ts} --fix
```
