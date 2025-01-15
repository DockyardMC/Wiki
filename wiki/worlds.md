# Creating a World

You can create a world by calling `WorldManager.create`:

```kotlin
val world = WorldManager.create("custom_world", FlatWorldGenerator(), DimensionTypes.OVERWORLD)
```

You need to supply a world generator and dimension type. There are two world generators built into dockyard:
- `FlatWorldGenerator`
- `VoidWorldGenerator`

You can create your own generators by extending the `WorldGenerator` interface.

You can also use `WorldManager.createWithFuture` to create a world with provided `CompletableFuture<World>` which is called when the world is fully loaded:

```kotlin
WorldManager.createWithFuture("custom_world", FlatWorldGenerator(), DimensionTypes.OVERWORLD).thenAccept { world ->
    world.defaultSpawnLocation = Location(0, 201, 0, world)
    DockyardServer.broadcastMessage("<lime>World ${world.name} loaded!")
}
```