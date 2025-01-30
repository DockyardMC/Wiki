---
prev: false
next: false
---

# Server List Metadata

## Usage

To set the server description (MOTD), you can use the bindable `ServerStatusManager#defaultDescription`:
```kotlin
ServerStatusManager.defaultDescription = "My cool Dockyard server"
```

To set the server icon, you can update the `ServerStatusManager#defaultIcon` bindable
```kotlin
val icon = this::class.java.getResource("/icon.png")
ServerStatusManager.defaultIcon = ServerIcon.fromURL(icon)
```
Or you can set it from a file:
```kotlin
val iconFile = File("/home/youruser/icon.png")
ServerStatusManager.defaultIcon = ServerIcon.fromFile(iconFile)
```

## Different MOTDs and icons for different ips

You set different MOTDs and icons for different ips using the `ServerStatusManager#endpointDescriptions` and `ServerStatusManager#endpointIcons` bindable maps:

```kotlin
ServerStatusManager.endpointDescriptions["0.0.0.0"] = "<green><bold>DockyardMC</bold> <dark_gray>| <lime>You are connecting through <yellow>0.0.0.0"
ServerStatusManager.endpointDescriptions["localhost"] = "<pink>Woah so different motd for the ip <white>localhost"
ServerStatusManager.endpointDescriptions["localho.st"] = "<#7842f5><u>nero sama.<r><gray> (localho.st)"

ServerStatusManager.endpointIcons["localhost"] = ServerIcon.fromFile(File("./maya.png"))
ServerStatusManager.endpointIcons["localho.st"] = ServerIcon.fromFile(File("./nero.png"))
```

Default MOTD will be used when endpoint-specific MOTD is not found