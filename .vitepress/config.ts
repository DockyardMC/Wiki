import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DockyardMC",
  description: "Wiki for the DockyardMC Project",
  base: '/Wiki/',
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
                { text: 'List of all events', link: 'wiki/events' },
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
                    { text: 'Freeze ticks', link: 'wiki/freeze-ticks' },
                    { text: 'Is on fire', link: 'wiki/is-on-fire' },
                    ]
            },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DockyardMC/Dockyard' }
    ]
  }
})
