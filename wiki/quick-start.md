---
prev: false
next: false
---

# Quick Start

## Setting up

Setting up a Dockyard server is easy! As DockyardMC is a library and not a standalone program (unlike for example PaperMC), you'll need to integrate it into your Kotlin project.

1. Create a new empty Kotlin project
2. Add following to your `build.gradle.kts`:

    ```kotlin
    repositories {
        maven("https://mvn.devos.one/releases")
    }
    
    dependencies {
        implementation("io.github.dockyardmc:dockyard:0.7.19")
    }
    
    ```
3. Then in your main function, create new instance of Dockyard Server
    ```kotlin
    val server = DockyardServer {
        withIp("0.0.0.0")
        withPort(25565)
        useMojangAuth(true)
    }
   
    server.start()
    ```

Now you should have a server running on IP `0.0.0.0` and port `25565`. You can change this and other settings in the [startup configuration](configuration-file)

## Spawning

By default, Dockyard will create an empty world for you to spawn in. As Dockyard doesn't have any world loaders yet, this world will serve as the main and fallback world in case you do not create any worlds on your own

To change what world players initially spawn in, you can listen on the `PlayerSpawnEvent` event and override the world there

```kotlin
val customWorld = WorldManager.create("custom_world", FlatWorldGenerator(), DimensionTypes.OVERWORLD)

Events.on<PlayerSpawnEvent> {
    it.world = customWorld
}
```
