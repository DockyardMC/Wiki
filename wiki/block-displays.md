---
prev:
  text: 'Item Displays'
  link: '/wiki/item-displays'
next: false
---

# Block Displays

## Overview

A block display has:
 - `block` which is `Block`

## Usage

You can spawn a block display using the normal entity spawning pattern:

```kotlin
val entity = world.spawnEntity(BlockDisplay(location, world)) as BlockDisplay
entity.block.value = Blocks.CHERRY_PLANKS.withBlockStates("half" to "top")
```