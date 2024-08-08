# Blocks & Block States

## Overview

Blocks have the following fields:
- `identifier` (minecraft:stone)
- `name` which is the display name (Stone)
- `transparent` which represents if block is transparent or not
- `lightEmitted` which represents the amount of light the block gives off
- `lightFiltered` which represents the amount of light the block filters when light is passed through the block
- `minState` which is the min protocol block state id of the block
- `maxState` which is the max protocol block state id of the block
- `defaultBlockState` which is the default protocol block state of the block
- `isClickable` which represents if block is right-clickable
- `cachedStates` which contains all possible block states combination pre-cached
- `blockStates` which has all the current block states of the block

## Usage

```kotlin
world.setBlock(7, 2, 7, Blocks.CHERRY_PLANKS)
```

You can also use setBlock with following parameters:
- `setBlock(Int, Int, Int, Block)`
- `setBlock(Vector3, Block)`
- `setBlock(Vector3f, Block)`
- `setBlock(Location, Block)`

To set block states, use the `.withBlockStates()` on a block object:

```kotlin
val shrieker = Blocks.SCULK_SHRIEKER.withBlockStates("can_summon" to "true")
world.setBlock(location, shrieker)
```

You can call .withBlockStates() with either `vararg Pair<String, String>` or with `Map<String, String>`

Alternatively, you can set block states of existing block using `setBlockState()`:

```kotlin
world.setBlockState(location, "waterlogged" to "true")
```