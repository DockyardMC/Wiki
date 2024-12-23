---
prev: false
next: false
---

# Server List Metadata

## Usage

To set the server description (MOTD), you can call `ServerStatusManager#setDescription`:
```kotlin
ServerStatusManager.setDescription("My cool Dockyard server")
```

To set the server icon from a bundled Resource, you can call `ServerStatusManager#setIconFromResource(URL)`:
```kotlin
val iconUrl = this::class.java.getResource("/icon.png")
ServerStatusManager.setIconFromResource(iconUrl)
```

To set the server icon from a file, you can call `ServerStatusManager#setIconFromFile(File)`:
```kotlin
val iconFile = File("/home/youruser/icon.png")
ServerStatusManager.setIconFromFile(iconFile)
```
