import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DockyardMC",
  description: "Wiki for the DockyardMC Project",
  base: '/',
  themeConfig: {
    editLink: {
          pattern: 'https://github.com/DockyardMC/Wiki/edit/main/:path',
          text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'wiki/quick-start' }
    ],

    sidebar: [
      {
        text: 'Setup',
        items: [
          { text: 'Quick Start', link: 'wiki/quick-start' }
        ]
      },
        {
          text: 'Schematics',
          items: [
            { text: 'Parsing & Placing Schematics', link: 'wiki/schematics-load' },
            { text: 'Saving Schematics', link: 'wiki/schematics-save' }
          ]
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DockyardMC/Dockyard' }
    ]
  }
})
