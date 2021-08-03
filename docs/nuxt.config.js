import theme from '@nuxt/content-theme-docs'

export default theme({
  /*
   ** Deployment target
   ** Doc: https://nuxtjs.org/guides/features/deployment-targets
   */
  target: "static",
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/guides/features/rendering-modes
   */
  mode: "universal",
  router: {
    base: '/docs/'
  },
  head: {
    title: "Mergin Maps Documentation",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  generate: {
    dir: 'dist/docs'
  },
  docs: {
    primaryColor: '#00CD81'
  },
  loading: {
    color: '#00CD81'
  },
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  css: [
    "./assets/main.css"
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-144776738-1'
    }]
  ]
})
