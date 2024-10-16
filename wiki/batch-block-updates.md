# Batch Block Updates

When manipulating a lot of blocks, you should use BatchBlockUpdate. BatchBlockUpdate updates all the blocks in chunk palettes directly and asynchronously without sending block updates and then resends the entire chunk update packet instead

## Overview

BatchBlockUpdate has:
- `updates` which is map of `Location` to `Block`, avoid settings this directly and use the methods below instead
- `setBlock(location, block)` method to set a block in the update
- `setBlock(x, y z, block)` as an alternative to method above
- `fill(location, location, block)` method to fill all blocks between the two provided locations
- `fill(x, y, z, x, y, z, block)` as an alternative to method above

## Usage

You can update blocks in a batch by calling `world.batchBlockUpdate` method:

```kotlin
world.batchBlockUpdate {
    fill(spawnStart, spawnEnd, Blocks.GRASS_BLOCK.withBlockStates("snowy" to "true")) // fill the ground with snowy grass!

    // let's build a snowman!!
    setBlock(snowmanLocation, Blocks.SNOW_BLOCK)
    setBlock(snowmanLocation.add(0, 2, 0), Blocks.SNOW_BLOCK)
    setBlock(snowmanLocation.add(0, 3, 0), Blocks.CARVED_PUMPKIN)
}
```