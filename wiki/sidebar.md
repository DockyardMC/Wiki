---
prev: false
next: false
---

# Sidebar API

## Overview

A `Sidenar` class contains:
- `title` which is the title of the sidebar
- `viewers` which is a list of players who see the sidebar
- `get()` returns `innerLines` as a list, which is a map composed of an `Int`, the height of the line on the sidebar, each line has to have a unique number, and a `SidebarLine` which can be one of the following:
  - `GlobalSidebarLine`, this line will be visible for all players in `viewers`
  - `PersonalizedSidebarLine`, this line will only be visible to a certain player
- `setGlobalLine(String)` adds the `String` in the parameter as a line at the bottom of the sidebar for `Player`
- `setPlayerLine((Player) -> String)` adds the `String` in the parameter as a line to the sidebar for all players
- `setGlobalLine(Int, String)` adds the `String` in the parameter as a line at the `Int` position of the sidebar for `Player`
- `setPlayerLine(Int, (Player) -> String)` adds the `String` in the parameter as a line at the `Int` position of the sidebar for all players
- `sendLinePacket(Player, Int)` sends the packet of line at position `Int` to the `Player`

::: info
See [Viewer Structure](/wiki/viewers) if you do not understand what a "viewer" is
:::

## Usage

You can create and customize a sidebar using the following code:

```kotlin
val customSidebar = Sidebar("Custom Sidebar")
```

To modify the name of the sidebar, you can simply change its value:

```kotlin
customSidebar.title.value = "Another Sidebar Title"
```

You can create lines with these functions:

```kotlin
customSidebar.setGlobalLine("1st line") //Shows 16 as the sidebar line for all players
customSidebar.setPlayerLine(player -> "Custom line for player") //Shows 15 as the sidebar line for 'player'
customSidebar.setGlobalLine(9, "Line at position 9") //Shows 9 as the sidebar line for all players
customSidebar.setPlayerLine(6, player -> "Custom line at position 6 for player") //Shows 6 as the sidebar line for 'player'
```

You can send the line to a player with this function:

```kotlin
customSidebar.sendLinePacket(16, player) //Sends line at position 16 to player
```

To add or remove a player from the sidebar viewer, you can change its list:

```kotlin
customSidebar.viewers.remove(player)
customSidebar.viewers.add(anotherPlayer)
```