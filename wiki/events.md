# Events

## Overview

Listening to events in Dockyard is quite simple. There is object `Events` that provides `on<Event>(unit: (Event) -> Unit)` to easily listen to events. It also returns a `EventListener` class which can be used to unregister the event using the `unregister(eventListener: EventListener)` method

You may also use `EventPool` class that acts like `Events` object but provides `dispose` method that unregisters all listeners registered to it.

## Usage

Let's use the `PlayerJoinEvent` as an example:

```kotlin
Events.on<PlayerJoinEvent> {
    val player = it.player
    DockyardServer.broadcastMessage("<yellow>${player} joined the game.")

    player.gameMode.value = GameMode.CREATIVE
    player.isFlying.value = true

    player.addPotionEffect(PotionEffects.NIGHT_VISION, 99999, 0, false)
    player.addPotionEffect(PotionEffects.SPEED, 99999, 3, false)
}
```

In more complicated scenarios like having event listeners in an entity class, we can use `EventPool` so we dont have to keep track of every event we register:

```kotlin
class Zombie(location: Location): Entity(location) {
    override var type: EntityType = EntityTypes.ZOMBIE
    override var health: Bindable<Float> = Bindable(20f)
    override var inventorySize: Int = 0

    val eventPool = EventPool()

    init {
        eventPool.on<PlayerDamageEntityEvent> {
            val entity = it.entity
            if(entity != this) return@on

            entity.playSoundToViewers(Sound("minecraft:entity.zombie.damage", pitch = randomFloat(0.7f, 1.2f)))
        }

        eventPool.on<PlayerMoveEvent> {
            val dist = it.player.location.distance(this.location)
            if (dist > 10) return@on

            this.lookAt(it.player)
        }

        eventPool.on<PlayerInteractWithEntityEvent> {
            val entity = it.entity
            val player = it.player
            if(entity != this) return@on

            player.sendMessage("<red>[NPC] Zombie: <white>grrrrr")
            player.playSound(Sound("minecraft:entity.zombie.ambient", pitch = randomFloat(0.7f, 1.2f)))
        }
    }

    // when entity is despawned
    override fun dispose() {
        eventPool.dispose() // automatically unregister all above events
        super.dispose()
    }
}
```