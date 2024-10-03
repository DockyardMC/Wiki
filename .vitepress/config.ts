import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DockyardMC",
  description: "Wiki for the DockyardMC Project",
  base: "/",
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
          { text: "Plugin Messages", link: "wiki/plugin-messages" },
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
        items: [
            { text: "Events", link: "wiki/events" },
            { text: "List of Events", link: "wiki/event-list" },
        ],
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
      {
        text: "Player",
        items: [
          { text: "Resourcepack", link: "wiki/resourcepacks" },
        ],
      },
      {
        text: "APIs",
        items: [
          { text: "Bossbar API", link: "wiki/bossbar" },
          { text: "Teams API", link: "wiki/teams" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DockyardMC/Dockyard" },
    ],
  },
});
