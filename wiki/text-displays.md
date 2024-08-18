# Text Displays

## Overview

A text displays has:
 - `text` which is `String`
 - `lineWidth` which is `Int`
 - `backgroundColor` which is `CustomColor`
 - `opacity` which is `Int`
 - `hasShadow` which is `Boolean`
 - `isSeeThrough` which is `Boolean`
 - `useDefaultBackgroundColor` which is `Boolean`
 - `alignment` which is `TextDisplayAlignment`

## Usage

You can spawn a text display using the normal entity spawning pattern:

```kotlin
val entity = world.spawnEntity(TextDisplay(location, world)) as TextDisplay
entity.text.value = "<rainbow><underline>Yippeeeeeee\n<white>Woah second line!"
```