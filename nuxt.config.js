export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || 'ThaiB2B - Your Travel Partner',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', property: 'description', name: 'description', content: 'thaiB2B, Leading Thailand Destination Management Company, has a profound understanding of Indian consumers travel needs and preferences.' },
        { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: 'Thaib2b' },
        { hid: 'twitter:card', property: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', property: 'twitter:site', name: 'twitter:site', content: '@Thaib2b' },
        { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', name: 'og:url', content: '' },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'ThaiB2B - Your Travel Partner' },
        { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'thaiB2B, Leading Thailand Destination Management Company, has a profound understanding of Indian consumers travel needs and preferences.' },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://thaib2b.vercel.app/logo.png' },
        { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'ThaiB2B - Your Travel Partner' },
        { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'thaiB2B, Leading Thailand Destination Management Company, has a profound understanding of Indian consumers travel needs and preferences.' },
        { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://thaib2b.vercel.app/logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Satisfy&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' }
      ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}