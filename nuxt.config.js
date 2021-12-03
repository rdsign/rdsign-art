import { keywords } from './contents/meta.js'

export default {
  target: 'static',

  head: {
    title: 'Metafolks NFT',

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: '---',
      },
      {
        name: 'keywords',
        content: keywords.toString(),
      },
      {
        property: 'og:title',
        content: 'metafolks',
      },
      {
        property: 'og:image',
        content: '/og.jpg',
      },
      {
        property: 'og:description',
        content: 'Metafolks NFT',
      },
      {
        property: 'og:url',
        content: 'www.metafolks.com',
      },
      {
        property: 'twitter:card',
        content: 'www.metafolks.com',
      },
      {
        property: 'twitter:site',
        content: '@metafolks',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],

    script: [
      {
        src: 'https://unpkg.com/embeddable-nfts/dist/nft-card.min.js',
        body: true,
        defer: true,
      },
    ],
  },

  css: ['@/styles/styles.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],

  modules: ['@nuxtjs/axios'],

  styleResources: {
    scss: './styles/_vars.scss',
  },

  axios: {},

  build: {},

  server: {
    host: '0.0.0.0',
  },
}
