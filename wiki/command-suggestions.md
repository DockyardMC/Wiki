---
prev:
  text: 'Commands'
  link: '/wiki/commands'
next: false
---

# Command Suggestions

## Overview

You can provide suggestions to an argument by providing it with a `((Player) -> Collection<String>)`

You can alternatively use `simpleSuggestion(string)` if you want only one static suggestion

### Usage

```kotlin
fun suggestWorlds(player: Player): Collection<String> {
    return WorldManager.worlds.keys.toList()
} 

Commands.add("/switchworld") {
    addArgument("world", WorldArgument(), ::sugestWorlds)
    execute {
        val player = it.getPlayerOrThrow()
        val world = getArgument<World>("world")

        player.teleport(world.defaultSpawnLocation)
        player.sendMessage("<lime>Teleported you to world <yellow>${world.name}<lime>!")
    }
}
```
Player specific suggestions:

```kotlin
fun suggestHomes(player: Player): Collection<String> {
    return HomeManager.getHomes(player).map { it.key }
}

Commands.add("home") {
    withDescription("Teleports player to predefined home location")
    addArgument("home", StringArgument(), ::suggestHomes)
    execute {
        val player = it.getPlayerOrThrow()
        
        val homeName = getArgument<String>("home")
        val home = HomeManager.getHomes(player)[homeName] ?: throw CommandException("You do not have a home named $homeName!")
        
        player.teleport(home.location)
        player.sendMessage("<lime>Teleported you to home <yellow>${home.name}<lime>!")
    }
}
```