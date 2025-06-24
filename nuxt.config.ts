import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    databaseUrl: ''
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // Module Configurations
  modules: ['shadcn-nuxt', '@nuxt/icon', '@nuxt/eslint'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'app',
        dir: './assets/icons'
      },
    ]
  }
})