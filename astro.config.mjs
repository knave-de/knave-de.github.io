import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: 'https://knave-de.github.io',
  integrations: [starlight({
    title: 'Knave',
    logo: { light: './src/assets/knave-logo-light.svg', dark: './src/assets/knave-logo-dark.svg' },
    favicon: '/favicon.png',
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/knave-de' }],
    sidebar: [
      { label: 'Introduction', items: [{ label: 'What is Knave?', slug: 'introduction/overview' }] },
      { label: 'Knave Desktop', items: [
        { label: 'Getting Started', slug: 'introduction/getting-started' },
        { label: 'Configuration', slug: 'desktop/configuration' },
        { label: 'Configuration topics', collapsed: true, items: [
          { label: 'Windows and workspaces', slug: 'desktop/configuration/windows' },
          { label: 'Input and shortcuts', slug: 'desktop/configuration/input' },
          { label: 'Appearance', slug: 'desktop/configuration/appearance' },
          { label: 'Session and services', slug: 'desktop/configuration/session' },
        ] },
        { label: 'Shell Styling', items: [
          { label: 'Getting Started', slug: 'desktop/styling/getting-started' },
          { label: 'Shared classes', slug: 'desktop/styling/shared' },
          { label: 'Status Bar', slug: 'desktop/styling/status-bar' },
          { label: 'Overview & Search', slug: 'desktop/styling/overview' },
          { label: 'Notifications', slug: 'desktop/styling/notifications' },
          { label: 'Quick Settings', slug: 'desktop/styling/quick-settings' },
          { label: 'Dialogs', slug: 'desktop/styling/dialogs' },
        ] },
      ] },
      { label: 'Knave UI', items: [
        { label: 'Introduction', slug: 'ui/overview' },
        { label: 'Getting Started', slug: 'ui/getting-started' },
        { label: 'Application Model', slug: 'ui/application-model' },
        { label: 'Elements & State', slug: 'ui/elements-state' },
        { label: 'Layout', slug: 'ui/layout' },
        { label: 'Styling', slug: 'ui/styling' },
        { label: 'Widgets', items: [
          { label: 'Overview', slug: 'ui/widgets' },
          { label: 'Typography & Display', slug: 'ui/widgets/typography' },
          { label: 'Buttons & Actions', slug: 'ui/widgets/buttons' },
          { label: 'Inputs & Forms', slug: 'ui/widgets/inputs' },
          { label: 'Selection', slug: 'ui/widgets/selection' },
          { label: 'Navigation', slug: 'ui/widgets/navigation' },
          { label: 'Collections', slug: 'ui/widgets/collections' },
          { label: 'Feedback & Overlays', slug: 'ui/widgets/feedback' },
        ] },
        { label: 'Examples', slug: 'ui/examples' },
      ] },
      { label: 'CSS Reference', items: [
        { label: 'Overview', slug: 'css/overview' },
        { label: 'Selectors', slug: 'css/selectors' },
        { label: 'Pseudo-classes & States', slug: 'css/states' },
        { label: 'Properties & Values', slug: 'css/properties' },
        { label: 'Theme Variables', slug: 'css/variables' },
        { label: 'Cascade & Inheritance', slug: 'css/cascade' },
        { label: 'Limitations', slug: 'css/limitations' },
      ] },
    ],
  })],
});
