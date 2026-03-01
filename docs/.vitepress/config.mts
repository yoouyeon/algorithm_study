import { defineConfig } from 'vitepress';
import { generateSidebar } from './utils/generateSidebar';
import path from 'path';

const docsDir = path.resolve(__dirname, '..');

export default defineConfig({
  title: 'algo.log',
  description: '알고리즘 풀이 기록',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { property: 'og:title', content: 'algo.log' }],
    ['meta', { property: 'og:description', content: '알고리즘 풀이 기록' }],
  ],
  cleanUrls: true,
  themeConfig: {
    sidebar: generateSidebar(docsDir),
    socialLinks: [{ icon: 'github', link: 'https://github.com/yoouyeon/algorithm_study' }],
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  lastUpdated: true,
});
