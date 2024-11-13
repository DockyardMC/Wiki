# Dockyard Configuration

## Overview

Dockyard has very simple dsl style config you can change when creating the DockyardServer object

## Configuration Settings

- `withIp(string)`
- `withPort(int)`
- `useMojangAuth(boolean)`
- `withNetworkCompressionThreshold(int)`
- `withMaxPlayers(int)`
- `useDebugMode(bool)`
- `withImplementations(ImplementationConfig)`

## Implementation Config

These are some basic default implementations that come with dockyard

- `applyBlockPlacementRules` (bool)
- `notifyUserOfExceptionDuringCommand` (bool)
- `commandErrorPrefix` (string)
- `commandNoPermissionsMessage` (string)
- `cacheSchematics` (bool)
- `dockyardCommands` (bool)
- `npcCommand` (bool)
- `itemDroppingAndPickup` (bool)

## Example

```kotlin
val server = DockyardServer {
    withIp("0.0.0.0")
    withMaxPlayers(50)
    withPort(25565)
    useMojangAuth(true)
    withImplementations {
        dockyardCommands = true
        itemDroppingAndPickup = true
    }
}

server.start()
```