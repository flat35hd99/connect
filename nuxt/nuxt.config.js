export default {
  // Target: https://go.nuxtjs.dev/config-target
  mode: 'universal',
  target: 'static',
  /**
   * github-pagesにデプロイするときはtrueになる
   * 詳しくは.github/workflows/gh-pages.ymlを参照
   */
  router: {
    base: process.env.DEPLOY_ENV === 'DEVELOP' ? '/connect/'
        : '/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'connect',
    htmlAttrs: {
      lang: 'en'
    },
    base: {
      href: process.env.DEPLOY_ENV === 'DEVELOP' ? '/connect/'
          : '/'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],
  styleResources: {
    scss: [
        './assets/style/*.scss',
        './assets/style/_mixins.scss',
      ],
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    dir: '../dist',
    fallback: true
  }
}
