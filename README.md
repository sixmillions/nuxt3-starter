# Nuxt3

## Init

```bash
npx nuxi init nuxt3-starter
cd nuxt3-starter
pnpm i
pnpm run dev
```

```bash
git init 
git branch -m main
git config user.name sixmillions
git config user.email liubw95@163.com
```

## Modules

### eslint

<https://nuxt.com/modules/eslint>

```bash
pnpm add -D eslint  @nuxtjs/eslint-module @nuxtjs/eslint-config-typescript
```

根目录新建 `.eslintrc.js`

```js
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'no-console': 'off'
  }
}
```

`package.json` 新增script

```json
{
  "lint": "eslint --ext .js,.ts,.vue ."
}
```

校验 `pnpm lint` , 自动修复 `pnpm lint --fix`

vscode保存时自动格式化，不需要prettier。先禁用prettier

<https://nuxt.com/docs/community/contribution#ide-setup>

<https://nuxt.com/docs/community/contribution#no-prettier>


vscode 配置

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
```

## api

<https://nuxt.com/docs/guide/directory-structure/server>

