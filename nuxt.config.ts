import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-lenis', '@nuxt/image', '@nuxt/icon'],
  plugins: [
    '~/plugins/gsap.ts'
  ],
  image: {
    dir: 'assets/images/'
  },
  icon: {
    mode: "svg",
    customCollections: [
      {
        prefix: "dcrew",
        dir: "./assets/icons",
      },
    ],
  },
})