import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGithubAlerts from 'remark-github-blockquote-alert';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      wrap: false,
      defaultColor: false,
    },
    remarkPlugins: [remarkMath, remarkGithubAlerts],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "Jost",
        cssVariable: "--font-jost",
        provider: fontProviders.fontsource(),
        weights:[400],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        name: "Libertinus Serif",
        cssVariable: "--font-libertinus",
        provider: fontProviders.fontsource(),
        weights:[400, 700],
        styles: ["normal", "italic"],
        subsets: ["latin"],
      },
    ]
  }
});
