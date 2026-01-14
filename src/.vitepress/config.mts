import { defineConfig, } from "vitepress";
import en from "./sidebar/en";
import { markdownItImageSize } from "markdown-it-image-size";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mergin Maps",
  description: "Mergin Maps Documentation",
  base: "/docs",
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  ignoreDeadLinks: true,
  cleanUrls: true,
  outDir: "../dist/docs",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'lite-youtube'
      }
    }
  },
  markdown: {
    config(md) {
      const maxHeight = 500 /* px */

      const img = md.renderer.rules.image!
      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx]

        const widthAttr = token.attrGet('width')
        const heightAttr = token.attrGet('height')

        let w = widthAttr ? Number.parseInt(widthAttr, 10) : null
        let h = heightAttr ? Number.parseInt(heightAttr, 10) : null

        let style = token.attrGet('style') || ''
        if (style && !style.trim().endsWith(';')) style += ';'

        if (w) {
          if (h && h > maxHeight) {
            w = Math.round(w * maxHeight / h)
            h = maxHeight
          }
          style += `width: ${w}px;`
        }

        token.attrSet('style', style)
        return img(tokens, idx, options, env, self)
      }

      markdownItImageSize(md, { publicDir: path.resolve(import.meta.dirname, '../public') })
    },
  },
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

    editLink: {
      pattern: "https://github.com/merginmaps/docs/edit/main/src/:path",
      text: "Help us improve this page!",
    },
  },
  transformPageData: (pageData) => {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:title",
        content: pageData.title,
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:description",
        content: pageData.description || "Mergin Maps Documentation",
      },
    ]),
      pageData.frontmatter.head.push([
        "meta",
        {
          name: "og:image",
          content:
            "https://merginmaps.com/opengraph.webp",
        },
      ]);
  },
});
