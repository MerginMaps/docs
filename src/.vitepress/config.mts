import { defineConfig } from "vitepress";
import en from "./sidebar/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mergin Maps",
  description: "Mergin Maps Documentation",
  base: "/docs",
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  ignoreDeadLinks: true,
  cleanUrls: true,
  outDir: "../dist/docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Home",
        link: "https://merginmaps.com/?utm_source=documentation&utm_medium=header&utm_campaign=docs",
      },
      {
        text: "Log In",
        link: "https://app.merginmaps.com/login?utm_source=documentation&utm_medium=header&utm_campaign=docs",
      },
    ],

    sidebar: en,
    logo: {
      dark: "/MM_symbol_COLOR_INVERSE_no_padding.svg",
      light: "/MM_symbol_COLOR_no_padding.svg",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/MerginMaps" }],

    editLink: {
      pattern: "https://github.com/merginmaps/docs/edit/main/src/:path",
      text: "Help us improve this page!",
    },
  },
});
