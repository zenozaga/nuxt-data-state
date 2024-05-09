export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },


  app: {
    head: {
      title: 'Nuxt DataState',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'author', name: 'author', content: 'zenozaga'},
        { hid: 'description', name: 'description', content: 'Nuxt DataState module' },
        { hid: 'keywords', name: 'keywords', content: 'nuxt, datastate, module' },
      ],
      script: [
        /// tailwindcss
        { src: 'https://cdn.tailwindcss.com' },
      ]
    }
  }

})
