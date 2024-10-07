---
prev: false
next: false
---

# Viewer Structure

## Overview

The **viewer structure** manages a dynamic list of viewers (usually Players) on an entity or any other object. It either provides methods to add or remove viewer or utilizes the [Bindables API](https://github.com/LukynkaCZE/kotlin-bindables) for `BindableList<Player>` and then listens when value gets added or removed to/from that list.

This structure enables selective updates and mainly **<u>visibility control</u>**

## Example

Entities utilize the viewer structure for visibility control.

Every entity provides `addViewer` and `removeViewer` methods.
When you add a player as viewer to an entity, the player will see the entity. If you remove the player, the player will no longer see the entity and won't be able to interact with it.

Other dockyard apis that utilizes the viewer structure are:
- [Bossbar API](/wiki/bossbar.md)
- [Sidebar API](/wiki/sidebar.md)