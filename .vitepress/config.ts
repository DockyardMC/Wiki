import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DockyardMC",
  description: "Wiki for the DockyardMC Project",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
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
            },
            {
              text: 'World',
              items: [
                { text: 'Blocks & Block States', link: 'wiki/block-states' },
              ]
            },
            {
              text: 'Events',
              items: [
                { text: 'List of Events', link: 'wiki/events' },
              ]
            },
            {
                text: 'Entities',
                items: [
                    { text: 'Potion Effects', link: 'wiki/potion-effects' },
                    { text: 'Entity Metadata', link: 'wiki/entity-metadata' },
                    { text: 'Layering Entity Metadata', link: 'wiki/layering-entity-meta' },
                    { text: 'Teams', link: 'wiki/teams' },
                    { text: 'Red Screen Tint', link: 'wiki/red-tint' },
                    { text: 'Freeze Ticks', link: 'wiki/freeze-ticks' },
                    { text: 'Is On Fire', link: 'wiki/is-on-fire' },
                    ]
            },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DockyardMC/Dockyard' }
    ]
  }
})
