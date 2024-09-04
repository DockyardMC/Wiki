---
prev: false
next:
  text: 'Suggestions'
  link: '/wiki/command-suggestions'
---

# Commands

## Overview

Commands in dockyard utilize the dsl builder syntax to provide simple but powerful api for creating commands.

Every command has:
- Arguments that are added with `addArgument(id, type)`
- Executor which is set with `execute`
  - executor provides the `CommandExecutor` class which contains the following:
    - `player` which is `Player?` object indicating the executing player or null if the command is executed from console
    - `console`, which is a `Console` object
    - `getPlayerOrThrow()` returns the executing player or throws a `CommandException` if executed from the console.
    - `sendMessage(string)` sends a message to the executor (player or console).
    - `hasPermission(string)` checks if the executor has the specified permission. Always returns true for console executors.
- Aliases which are set with `withAliases(vararg string)` or `withAliases(List<String>)`
- Description which is displayed in /commands or /help, set with `withDescription(string)`
- Optionally, subcommands can be added using the `addSubcommand` method

## Usage

Creating commands in Dockyard is quite simple:

```kotlin

Commands.add("/hello") {
    execute {
        it.sendMessage("world!")
    }
}
```

To add arguments, use the `addArgument(id: String, type: CommandArgument)` method

You can use any of these following arguments:
- `StringArgument`
- `IntArgument`
- `DoubleArgument`
- `FloatArgument`
- `LongArgument`
- `BooleanArgument`
- `UUIDArgument`
- `EnumArgument`
- `BlockArgument`
- `BlockStateArgument`
- `PlayerArgument`
- `EntityArgument`
- `SoundArgument`
- `ParticleArgument`
- `WorldArgument`
- `LegacyTextColorArgument`

You can get the value of the argument by using the `getArgument<Type>("id")`. If the argument is optional, then you can use `getArgumentOrNull<Type>("id")`. If you used `EnumArgument`

```kotlin
Commands.add("/broadcast") {
    addArgument("message", StringArgument())
    execute {
        val message = getArgument<String>("message")
        DockyardServer.broadcastMessage("<red>ding dong!!! <yellow>$message")
    }
}
```

```kotlin
Commands.add("/gamemode") {
    withPermission("server.gamemode")
    addArgument("mode", EnumArgument(GameMode::class))
    addOptionalArgument("player", PlayerArgument())
    execute {
        val gamemode = getEnumArgument<GameMode>("mode")
        // get the player optional argument, if its null (not specified by player), then default to the executor
        val player = getArgumentOrNull<Player>("player") ?: it.getPlayerOrThrow()

        player.gameMode.value = gamemode
        player.sendMessage("Set gamemode of player $player to ${gamemode.name}")
    }
}
```

## Subcommands

You can additionally specify subcommands of a command by using the `addSubcommand` method

Each subcommand has all the properties of normal command. For example, you can have different subcommands with different permissions or have subcommands on subcommands

```kotlin
Commands.add("/sound") {
    withPermission("server.commands.sound")
  
    addSubcommand("play") {
        addArgument("sound", SoundArgument())
        withPermission("server.commands.sound.play")
        execute {
            val player = it.getPlayerOrThrow()
            val sound = getArgument<Sound>("sound")
            player.playSound(sound)
        }
    }
  
    addSubcommand("stop") {
        addArgument("sound", SoundArgument())
        withPermission("server.commands.sound.stop")
        execute {
            val player = it.getPlayerOrThrow()
            val sound = getArgument<Sound>("sound")
            player.stopSound(sound)
        }
    }
}
```

::: warning
Do mind that a command cannot have both arguments and subcommands at the same time, but it can have an executor on its own
:::

## Returning Errors

You can throw `CommandException` to return an error to the executor without its stack trace being logged into the console:

```kotlin
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

All other exceptions will throw as normal. When this happens, the executor will be provided with a message telling them that there was exception thrown during execution of the command. This message is configurable in the [configuration file](configuration-file)