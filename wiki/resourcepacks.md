# Resourcepacks

## Overview

Dockyard provides easy way to add and remove resourcepacks to/from players.
Resourcepacks are stored on player in format of `MutableMap<String, Resourcepack>`

## Usage

You can use the dsl builder style method `addResourcepack(name)` to add resourcepack to player. It provides following properties:
- `withUrl(String)` to set url
- `setForced(Boolean)` to set if the resourcepack is forced or not, the client will automatically disconnect the client if they decline
- `withPromptMessage(String)` to change the resourcepack prompt message
- `onFail((ResourcepackResponseEvent) -> Unit)` which runs when the resourcepack loading/downloading fails or when player declines
- `onSuccess((ResourcepackResponseEvent) -> Unit)` which runs when applying the resourcepack was successful

```kotlin
player.addResourcepack("ember-seeker") {
    withUrl("http://cdn.lukynka.cloud/ember-seeker-pack.zip")

    onSuccess { response ->
        response.player.sendMessage("<lime>Successfully loaded resourcepack!")
    }
    onFail { response ->
        response.player.sendMessage("<red>womp womp: <orange>${response.status.name}")
    }
}
```

You can also remove the resourcepack from player by using the `removeResourcepack(name)`:

```kotlin
player.removeResourcepack("ember-seeker")
```