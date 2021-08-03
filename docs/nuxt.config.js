import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  router: {
    base: '/docs'
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
