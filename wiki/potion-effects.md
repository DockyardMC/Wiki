---
prev: false
next: false
---
# Potion Effects

## Overview

### `PotionEffect`:
- `id` which represents id in the registry
- `namespace` which represents minecraft identifier (ex. minecraft:glowing)
- `name` which is display name of the potion effect (ex. Glowing)
- `type` either `GOOD` or `BAD`

---

### `AppliedPotionEffect`:
- `effect` which is reference to `PotionEffect`
- `duration` which is duration in ticks
- `level`, the potion level
- `showParticles` determines if there are particles around the entity
- `showBlueBorder`, potion effects given by beacons have this
- `showIconOnHud` determines if the potion icon should be shown on hud
- `startTime` which represents the start time of the potion

`AppliedPotionEffect` is the class that's actually stored on entities. When the potion should be taken away is determined by `currentTimeMillis >= startTime + ticksToMs(duration)` in the `tick` function on entity.

::: info
Potion effects on entities that have ticking disabled will not be automatically taken away when they run out
:::

## Usage

You can apply potion effect to an entity by calling the `addPotionEffect` on an entity:

```kotlin
val showParticles = false
val duration = 200 // duration in ticks, -1 for infinity
val level = 1
entity.addPotionEffect(PotionEffects.GLOWING, duration, level, showParticles)
```

If you call `addPotionEffect` with the same potion effect multiple times, it gets replaced with the latest one 

---

You can remove potion effect by calling `removePotionEffect`:

```kotlin
entity.removePotionEffect(PotionEffects.GLOWING)
```

::: warning
Some effects that rely on attribute modifier are not implemented yet.
:::