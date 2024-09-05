# Configuration File

## Overview

The configuration file contains a bunch of dockyard settings you can change, including networking, chunk engine, implementations etc.
The config is stored in the core directory with the name `dockyard.toml`

## Configuration Settings

*   `configVersion` (Int): The version of this configuration file.
*   `serverConfig`:
    *   `ip` (String): IP address for the server to run on
    *   `port` (Int): Port
    *   `networkCompressionThreshold` (Int): Minimum size (in bytes) for data to be compressed before sending over the network
    *   `debug` (Boolean): Enables or disables debug/developer mode (Do not enable on production servers, its lot of spam)
    *   `cacheSchematics` (Boolean): Enables or disables caching of schematic files. If you are gonna be placing same schematic multiple times, this will cache the schematic when its first parsed. Any subsequent placements will retrieved it from the cache instead of parsing it again. Do keep in mind, if the contents of the file changes, the cache will be invalidated.  
    *   `maxPlayers` (Int): Maximum amount of players able to join the server  
*   `chunkEngine`
    *   `async` (Boolean): Specifies if the server should do chunk loading and generation asynchronously
*   `implementationConfig`:
    *   `applyBlockPlacementRules` (Boolean): Enables or disables block placement rules. (These are very barebones)
    *   `notifyUserOfExceptionDuringCommand` (Boolean): If exception is thrown during command execution, should the executor be notified?
    *   `commandErrorPrefix` (String): The prefix of command error message
    *   `commandNoPermissionsMessage` (String): The message that gets sent to the player when they do not have permissions to execute the command 
*   `defaultImplementations`:
    *   `dockyardCommands` (Boolean): Enables or disables the core dockyard commands like `/gamemode`, `/world` and `/version`

## Current Default Config

```toml
configVersion = 3

[serverConfig]
    ip = "0.0.0.0"
    port = 25565
    networkCompressionThreshold = 256
    cacheSchematics = true
    debug = false
    maxPlayers = 50

[chunkEngine]
    async = true

[implementationConfig]
    applyBlockPlacementRules = true
    notifyUserOfExceptionDuringCommand = true
    commandErrorPrefix = "<dark_red>Error <dark_gray>| <red>"
    commandNoPermissionsMessage = "You do not have permissions to execute this command!"

[defaultImplementations]
    dockyardCommands = true
```

## Config Change History

### Changes in config version 3:

- Renamed `bundledPlugins` to `defaultImplementations` since plugin support was completely removed
- Removed `dockyardExtras` from implementations
- Added `notifyUserOfExceptionDuringCommand` to implementation config
- Added `commandErrorPrefix` to implementation config
- Added `commandNoPermissionsMessage` to implementation config
- Added `maxPlayers` to server config

### Changes in config version 2:

- Removed `mayaTestPlugin` from implementations
- Removed `mudkipTestPlugin` from implementations
- Removed `emberSeeker` from implementations
- Added `cacheSchematics` to server config