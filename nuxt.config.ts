// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'dayjs-nuxt'
  ],
  css: [
    '~/assets/css/main.css'
  ]
})
