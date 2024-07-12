// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    //
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "/api",
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
});
