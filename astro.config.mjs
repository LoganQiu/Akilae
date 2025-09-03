// @ts-check
import { defineConfig } from 'astro/config';
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
});