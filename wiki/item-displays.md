---
prev:
  text: 'Text Displays'
  link: '/wiki/text-displays'
next:
  text: 'Block Displays'
  link: '/wiki/block-displays'
---

# Item Displays

## Overview

An item display has:
 - `item` which is `ItemStack`
 - `renderType` which is `ItemDisplayRenderType`

## Usage

You can spawn an item display using the normal entity spawning pattern:

```kotlin
val entity = world.spawnEntity(ItemDisplay(location, world)) as ItemDisplay

val ironSword = ItemStack(Items.IRON_SWORD)
ironSword.components.add(EnchantmentGlintOverrideItemComponent(true))

entity.item.value = ironSword
```