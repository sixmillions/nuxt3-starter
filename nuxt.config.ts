// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  modules: [
    '@nuxtjs/eslint-module',
    '@element-plus/nuxt',
    'dayjs-nuxt'
  ],
  dayjs: {
    locales: ['en', 'zh-cn'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'zh-cn',
    defaultTimezone: 'Asia/Shanghai'
  }
})
