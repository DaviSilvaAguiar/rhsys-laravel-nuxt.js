// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000/api'
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },


  
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt', 
  ]
})