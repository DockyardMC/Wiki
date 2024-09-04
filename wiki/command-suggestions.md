---
prev:
  text: 'Commands'
  link: '/wiki/commands'
next: false
---

# Command Suggestions

## Overview

You can provide suggestions to an argument by giving it a `CommandSuggestions` class after the suggestion type parameter. 

You can use the `SuggestionProvider` to easily creative the `CommandSuggestions` class

SuggestionProviders gives you two methods to use:
- `simple(List<String>)` or `simple(vararg string)` which is simple list of suggestions as string
- `withContext((Player) -> List<String>)` which gives you a player object of the player receiving the suggestion

### Simple Suggestion example:

```kotlin
fun suggestWorlds(): CommandSuggestions {
    return SuggestionProvider.simple(WorldManager.worlds.map { it.key })
}

Commands.add("/switchworld") {
    addArgument("world", WorldArgument(), suggestWorlds())
    execute {
        val player = it.getPlayerOrThrow()
        val world = getArgument<World>("world")

        player.teleport(world.defaultSpawnLocation)
        player.sendMessage("<lime>Teleported you to world <yellow>${world.name}<lime>!")
    }
}
```

### WithContext Suggestion example:


```kotlin
fun suggestHomes(): CommandSuggestions {
    return SuggestionProvider.withContext { player -> 
        HomeManager.getHomes(player).map { it.key }
    }
}

Commands.add("home") {
    withDescription("Teleports player to predefined home location")
    addArgument("home", StringArgument(), suggestHomes())
    execute {
        val player = it.getPlayerOrThrow()
        
        val homeName = getArgument<String>("home")
        val home = HomeManager.getHomes(player)[homeName]
        if(home == null) throw CommandException("You do not have a home named $homeName!")
        
        player.teleport(home.location)
        player.sendMessage("<lime>Teleported you to home <yellow>${home.name}<lime>!")
    }
}
```