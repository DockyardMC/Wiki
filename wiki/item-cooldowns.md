# Item/Group Cooldowns

## Overview

Item/Group cooldowns allow users to set cooldown on either item or an group (string) for players

The `ItemGroupCooldown` class contains:
- `group` which is a string
- `startTime` which is a unix time in milliseconds of when the cooldown started
- `durationTicks` which is how long the cooldown should last for in ticks

::: tip KEEP IN MIND
Cooldowns will only work with player entities that have ticking enabled
:::

## Usage

You can set cooldown of an Item like this: 
```kotlin 
player.setCooldown(item, 20)
```

or you can use custom group:

```kotlin 
player.setCooldown(string, 20)
```

You can use `player.isOnCooldown(item)` or `player.isOnCooldown(string)` to check if player has cooldown on an Item or group.

If you want to get the `ItemGroupCooldown` object from player, it is a `MutableMap<String, ItemGroupCooldown>` on the player object.

There is no way in minecraft to remove a cooldown, but you can set cooldown of the same item/group with 0 duration which will clear it

::: tip KEEP IN MIND
Dockyard does not cancel any right-click/interaction events with items on cooldown
:::

