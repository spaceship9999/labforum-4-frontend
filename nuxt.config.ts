import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_BASE: process.env.BASE_URL,
    },
    axios: {
        baseURL: process.env.BASE_URL,
    },
    auth: {
       strategies: {
           local: {
               endpoints: {
                   login: {
                       url: '/api/auth/login',
                       method: 'post',
                       propertyName: 'access_token',
                       userinfo_endpoint: false,
                   },
                   logout: {
                       url: '/api/auth/logout',
                       method: 'get',
                   }
               },
               tokenRequired: true,
               tokenType: 'Bearer',
           }
       }
    },
    modules: [
        '@nuxtjs-alt/axios',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    plugins: [
        '@/plugins/persistedstate.js',
        '@/plugins/axios.js'
    ]
})
