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

## Event Filters
Sometimes, you may register an event listener, but only care about events relating to a certain entity, world or other object.\
For instance, in the above example, we often repeat `if(entity != this) return@on` in order to only run our listener for the entity we care about. 

Introducing **EventPool event filters**!\
EventFilters are simply functions, which run for every single event, and dertime whether your listener should be called or not.

```kt
// this creates an EventPool, where only events relating to 'entity' will be called
val eventPool = EventPool.withFilter(EventFilter.containsEntity(entity))

// here we don't need any entity checks anymore, because this will only be called
//  if it relates to the entity we're looking for
eventPool.on<PlayerDamageEntityEvent> {
    entity.playSoundToViewers(Sound("minecraft:entity.zombie.damage", pitch = randomFloat(0.7f, 1.2f)))
}
```

```kt
// this creates an EventPool, with only events which happen inside of 'myWorld'
val eventPool = EventPool.withFilter(EventFilter.containsWorld(myWorld))

eventPool.on<PlayerSneakToggleEvent> {
    DockyardServer.broadcastMessage("sneakies in my world D:")
}
```

### Writing EventFilters
EventFilters make use of the `context` field avaliable on all Events

You can make use of the `EventFilter` functions to create some simple filters
```kt
EventFilter.containsPlayer(player)
EventFilter.containsEntity(entity)
EventFilter.containsWorld(world)
EventFilter.containsObject(obj)
```

You can also combine filters using `EventFilter#all` and `EventFilter#any`
```kt
// Allows events which contain player1 *or* entity1
EventFilter.any(
    EventFilter.containsPlayer(player1),
    EventFilter.containsEntity(entity1)
)

// Allows events which contain player1 *and* world1
EventFilter.all(
    EventFilter.containsPlayer(player1),
    EventFilter.containsWorld(world1)
)
```

Completely custom event filter

::: tip
The various lists within the `EventContext` object are automatically populated.\
- `context.entities` also includes players
- `context.worlds` will not only contain any worlds directly on the event (e.g. on the `PlayerChangeWorldEvent`)
but also the worlds that any of the entities are in. 
- `context.other` will contain ALL object within the Event\
:::

```kt
val filter = EventFilter { event ->
    val context = event.context

    // Check if this event relates to a specific object
    context.players.contains(player) // checks for players
    context.entities.contains(entity) // checks for entities
    context.worlds.contains(world) // checks for worlds
    context.other.contains(obj) // checks for additional objects
    
    context.isGlobalEvent // can be used to check if this event is "global"
    // global events are events such as the ServerTickEvent 
    //  which don't relate to any objects in particuar

    // we can use 'when' blocks to granularly control specific
    //  events
    when (event) {
        is HorseJumpEvent -> {
            // this will filter out the HorseJumpEvent when the horse is jumping
            if (event.isJumping) return@EventFilter false
        }
    }

    return@EventFilter true // return true if you want event listeners to be ran
    return@EventFilter false // return false if not
}
```

## EventPool Trees
Internally, the Events system, and EventPools are represented as a tree. 
Each node on the tree is an object which extends `EventSystem` (usually an EventPool, or the main Events object)

This means that you can add EventPools as children to other EventPools, and will inherit the Event Filters of it's parent.

The tree could look something like this:
```
GlobalEvents (the Events object)
  ↪ eventpool-1 (main world event filter)
    ↪ eventpool-1-a
    ↪ eventpool-1-b
  ↪ eventpool-2 (alternate world event filter)
    ↪ eventpool-2-a
  ↪ eventpool-3 (no filters)
```
In this case `eventpool-1` has a filter to events in the main world, and `eventpool-2` events in the alt world.

If an event is dispatched in the **main world**
```js
GlobalEvents (the Events object) // [!code ++]
  ↪ eventpool-1 (main world event filter) // [!code ++]
    ↪ eventpool-1-a // [!code ++]
    ↪ eventpool-1-b // [!code ++]
  ↪ eventpool-2 (alternate world event filter) // [!code --]
    ↪ eventpool-2-a // [!code --]
  ↪ eventpool-3 (no filters) // [!code ++]
```

To do this, you can use the `EventSystem#subPool` function,
```kt
val mainWorldPool = EventPool.withFilter("eventpool-1", MainWorldFilter)
val eventPool = mainWorldPool.subPool("eventpool-1-a")
val eventPoolB = mainWorldPool.subPool("eventpool-1-b")
```

You can add additional filters to child pools by chaining `.withFilter(EventFilter)`
```kt
val hubWorldPool = EventPool.withFilter("eventpool-2", HubWorldFilter)
val rankedPool = altWorldPool.subPool("eventpool-2-a").withFilter(RankedPlayerFilter)
```
> Event listeners registered against `rankedPool` will only be run
> if `HubWorldFilter` and `RankedPlayerFilter` are satified

Events can also be dispatched directly into any EventPool
```kt
hubWorldPool.dispatch(PlayerDoesSomethingEvent(player))
```

> This will cause that pools listeners to be triggered, and also it's children, but ONLY that pools
> children will be triggered, other unrelated pools will not.
```js
GlobalEvents (the Events object) 
  ↪ eventpool-1 (main world event filter) 
    ↪ eventpool-1-a
    ↪ eventpool-1-b
  ↪ eventpool-2 (alternate world event filter) // [!code ++]
    ↪ eventpool-2-a // [!code ++]
  ↪ eventpool-3 (no filters)
```

EventPools also do not *need* to have a parent, and this can allow you to create your own self-contained
event trees
```kt
val myPool = EventPool(parent = null, name = "MyPool")
val childOne = myPool.subPool("child-1")
val childTwo = myPool.subPool("child-2")
val childTwoA = childTwo.subPool("child-2-a")
```

```js
GlobalEvents (the Events object)
  ...

MyPool
  ↪ child-1
  ↪ child-2
    ↪ child-2-a
```

Since `MyPool`'s parent is not the `Events` object (or a child of it) it will not receive any events that are dispatched from the
Dockyard Server