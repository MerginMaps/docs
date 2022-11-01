const { description } = require('../../package')
var path = require('path')
const pageSuffix = '/'

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mergin Maps Documentation',
  editLinks: true,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: '/docs/',
  dest: 'dist/docs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#00a884' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Documentation',
      // description: 'Enjoy the feeling when you make sense of your geo-data on maps'
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // logo in navbar
    logo: '/mm_logo_positive_half_padding.png',
    // Optional options for generating "Edit this page" link
    docsRepo: 'merginmaps/docs',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    smoothScroll: false,
    displayAllHeaders: true,
    sidebarDepth: 0,
    // Main project repository (Github namespace/<project>) !! This is link in the navbar!
    // repo: 'lutraconsulting',
    // repoLabel: 'GitHub',
    nav: [],
    sidebar: require('./sidebar/en')
  },
  
  alias: {
      '@fonts': path.resolve(__dirname, './public/fonts')
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['vuepress-plugin-google-tag-manager', {
      'gtm': 'GTM-NW7ZGNB'
    }],
    [ 'clean-urls', {
      normalSuffix: pageSuffix,
      indexSuffix: pageSuffix
    }],
    ['fulltext-search']
  ],

  markdown: {
    pageSuffix,
    extendMarkdown: md => {
      md.set({
        breaks: true
      })
    }
  },

  extraWatchFiles: [
      '.vuepress/nav/en.js',
      '.vuepress/sidebar/en.js'
  ]
}
