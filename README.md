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
git config user.name sixmillions
git config user.email liubw95@163.com
```

push

```bash
git remote add origin https://github.com/sixmillions/nuxt3-starter.git
git branch -M main
git push -u origin main
```

## Modules

### eslint

<https://nuxt.com/modules/eslint>

```bash
pnpm add -D eslint  @nuxtjs/eslint-module @nuxtjs/eslint-config-typescript
```

`nuxt.config.ts` 配置 modules

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module'
  ]
})
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

### Element-plus

<https://nuxt.com/modules/element-plus>

```
pnpm add -D element-plus @element-plus/nuxt
```

`nuxt.config.ts` 配置 modules

```ts
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ]
})
```

### Dayjs

<https://nuxt.com/modules/dayjs>

```bash
pnpm add -D dayjs-nuxt
```

`nuxt.config.ts` 配置 modules

```ts
export default defineNuxtConfig({
  modules: [
    'dayjs-nuxt'
  ]
})
```

可以配置默认locale和时区

```ts
export default defineNuxtConfig({
  modules: ['dayjs-nuxt'],
  dayjs: {
    locales: ['en', 'zh-cn'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'zh-cn',
    defaultTimezone: 'Asia/Shanghai' // 只影响 dayjs().tz()
  }
})
```

### tailwindcss

<https://nuxt.com/modules/tailwindcss>

<https://tailwindcss.nuxtjs.org/getting-started/setup>

<https://tailwindcss.com/docs/installation>

```bash
pnpm add -D @nuxtjs/tailwindcss
```

config

```ts
{
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

### color-mode

<https://nuxt.com/modules/color-mode>

<https://color-mode.nuxtjs.org/>

```bash
pnpm add -D @nuxtjs/color-mode
```

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode']
})
```

配合element

<https://element-plus.org/zh-CN/guide/dark-mode.html>

<https://github.com/element-plus/element-plus-nuxt-starter/blob/main/nuxt.config.ts>

配置

```ts
{
  elementPlus: {
    // 相当于引入了 @import url('element-plus/theme-chalk/src/dark/var.scss');
    themes: ['dark']
  },
  colorMode: {
    // coloreMode默认类名是 'dark-mode' 这种；element是 'dark' 这种；为了有效果所以要去掉后缀
    classSuffix: ''
  }
}
```

## api

<https://nuxt.com/docs/guide/directory-structure/server>

## scss

css扩展语言scss

```bash
pnpm add -D scss
```