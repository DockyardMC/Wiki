---
prev: false
next: false
---

# Entities

## Overview

All entities must extend the base Entity class. The base entity class contains all the basis entity has. Stuff like health, metadata, team, potion effects, world, type etc.

::: info
In the future, there will also be MinimalEntity class which will have absolute minimal implementation for entity to provide better performance for entities like Display Entities and other entities that do not require stuff like health, inventory, potion effects etc.
:::

## Usage

To start, you need to implement an entity into your own entity class. For this example, lets create a warden entity:

First, we have to make the `Warden` class that will extend the`Entity` class and

```kotlin
class Warden(location: Location): Entity(location) {
}
```

Next you also need to add override for `type` and optionally for `health` and `inventorySize`:

```kotlin
class Warden(location: Location): Entity(location) {
    override var type: EntityType = EntityTypes.WARDEN
    override var health: Bindable<Float> = Bindable(500f)
    override var inventorySize: Int = 0
}
```
### Spawning

Now that we have our warden class implemented, lets spawn it!

To spawn an entity, you call the `spawnEntity` method on a `World` object:

```kotlin
val entity = world.spawnEntity(Warden(location)) as Warden
```

By default, this will spawn the entity for all players, but you can specify it to not by setting the `noViewers` to `false` and then adding the players you want to see the entity manually:

```kotlin
val entity = world.spawnEntity(Warden(location)) as Warden
entity.addViewer(player)
```

::: info
See [Viewer Structure](/wiki/viewers) if you do not understand what a "viewer" is
:::

### Despawning

You can easily despawn entity by calling the `despawnEntity` method on the `World` object:

```kotlin
world.despawnEntity(entity)
```

Despawning entity will also automatically remove all viewers.