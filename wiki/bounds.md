# Bounds

Bounds are defined areas in a world that can detect when players enter or leave. They also contain information about the blocks and entities within them

## Usage

A bound has:
- `firstLocation` and `secondLocation` which the bound is created from
- `world` which is the world of the bound
- `players` which is a list of all players within the bound
- `metadata` which is a `CustomDataHolder`, allows you to store custom metadata on the bound object
- `ticks` which is boolean indicating if the bound ticks or not (ticking is used to determine when players enter/leave. PlayerMoveEvent is not reliable for this)
- `onEnter` method which sets the unit which is invoked when player enters the bound
- `onLeave` method which sets the unit which is invoked when player leaves the bound
- `highestPoint` which is the location highest point in the bound
- `lowestPoint` which is the location lowest point in the bound
- `fill` method which fills all the blocks in the bound
- `getBlocks` which returns map of Location to Block of all blocks in the bound
- `resize` method which resizes the bound
- `getEntities` method which returns Entity list of all entities in the bound
- `dispose` method which removes the bound and unregisters all bindables and listeners

## Examples

You can create a bound by passing in locations of two corners, then you can use onEnter and onLeave methods to set what happens when players enter/leave:

```kotlin
val bound = Bound(topRight, bottomLeft)

bound.onEnter { player ->
    player.sendMessage("<red>Entering PVP Area! Be careful!!")
    player.isInvulnerable = false
}

bound.onLeave { player ->
    player.sendMessage("<lime>Leaving PVP Area! You are safe now :P")
    player.isInvulnerable = true
}
```