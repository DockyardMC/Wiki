import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DockyardMC",
  description: "Wiki for the DockyardMC Project",
  base: "/Wiki/",
  head: [["link", { rel: "icon", href: "/Wiki/favicon.ico" }]],
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },
    editLink: {
      pattern: "https://github.com/DockyardMC/Wiki/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    docFooter: {
      prev: false,
      next: false,
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "wiki/quick-start" },
    ],
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Quick Start", link: "wiki/quick-start" },
          { text: "Viewer Structure", link: "wiki/viewers" },
          { text: "Configuration File", link: "wiki/configuration-file" },
        ],
      },
      {
        text: "Commands",
        items: [
          { text: "Commands", link: "wiki/commands" },
          { text: "Suggestions", link: "wiki/command-suggestions" },
        ],
      },
      {
        text: "Schematics",
        items: [
          {
            text: "Parsing & Placing Schematics",
            link: "wiki/schematics-load",
          },
          { text: "Saving Schematics", link: "wiki/schematics-save" },
        ],
      },
      {
        text: "World",
        items: [{ text: "Blocks & Block States", link: "wiki/block-states" }],
      },
      {
        text: "Events",
        items: [{ text: "List of Events", link: "wiki/events" }],
      },
      {
        text: "Entities",
        items: [
          { text: "Entities", link: "wiki/entities" },
          { text: "Potion Effects", link: "wiki/potion-effects" },
          { text: "Entity Metadata", link: "wiki/entity-metadata" },
          {
            text: "Layering Entity Metadata",
            link: "wiki/layering-entity-meta",
          },
          { text: "Teams", link: "wiki/teams" },
          { text: "Red Screen Tint", link: "wiki/red-tint" },
          { text: "Freeze Ticks", link: "wiki/freeze-ticks" },
          { text: "Is On Fire", link: "wiki/is-on-fire" },
        ],
      },
      {
        text: "Display Entities",
        items: [
          { text: "Base Display Entity", link: "wiki/display-entity" },
          { text: "Text Displays", link: "wiki/text-displays" },
          { text: "Item Displays", link: "wiki/item-displays" },
          { text: "Block Displays", link: "wiki/block-displays" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DockyardMC/Dockyard" },
    ],
  },
});
