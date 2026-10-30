import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: 'https://knave-de.github.io',
  integrations: [starlight({
    title: 'Knave',
    logo: { src: './src/assets/knave-logo.png' },
    favicon: '/favicon.png',
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/knave-de' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: 'Knave Desktop', items: [{ autogenerate: { directory: 'desktop' } }] },
      { label: 'Knave UI', items: [{ autogenerate: { directory: 'ui' } }] },
      { label: 'CSS Reference', items: [{ autogenerate: { directory: 'css' } }] },
    ],
  })],
});
