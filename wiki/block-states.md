# Blocks & Block States

> [!IMPORTANT]
> Since `Dockyard 0.6`, blocks have been split into `Block` and `RegistryBlock`

## Overview

Blocks have the following fields:
- `registryBlock` which is the registry representation of the block
- `blockStates` which has all the current block states of the block
- `customData` which is a `CustomDataHolder`, allows you to store custom metadata on the block
- `identifier` (minecraft:stone)
- `getProtocolId` method which returns the protocol id of the block
- `isAir` method which boolean depending on if the block is air or not
- 
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