// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { baseURL: '/base' },
  experimental: { componentIslands: { selectiveClient: true } },
});
