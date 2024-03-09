// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Fake Store',
      meta: [
        {
          name: 'description',
          content: 'Nuxt Fake Store'
        },
        {
          name: 'author',
          content: 'achowba',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY,
    currencyApiBaseUrl: process.env.CURRENCY_API_BASE_URL,
  },
})
