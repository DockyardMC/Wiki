---
prev: false
next: false
---

# Sidebar API

## Overview

A `Sidebar` class contains:
- `title` which is the title of the sidebar
- `viewers` which is a list of players who see the sidebar
- `get()` returns `innerLines` as a list, which is a map composed of an `Int`, the height of the line on the sidebar, each line has to have a unique number, and a `SidebarLine` which can be one of the following:
  - `GlobalSidebarLine`, this line will be visible for all players in `viewers`
  - `PersonalizedSidebarLine`, this line will only be visible to a certain player

::: info
See [Viewer Structure](/wiki/viewers) if you do not understand what a "viewer" is
:::

## Usage

You can create and customize a sidebar using the following code:

```kotlin
val sidebar = Sidebar("<pink>Cool Sidebar") {
        setGlobalLine("1st line")
        setPlayerLine { player -> "Welcome, <lime>${player.username}<white>!" }
        setGlobalLine(9, "line at position 9")
        setPlayerLine(6) { player -> "Your health: <red>${player.health}"}
    }
```

To modify the name of the sidebar, you can simply change its value:

```kotlin
customSidebar.title.value = "Another Sidebar Title"
```
To add or remove a player from the sidebar viewer, you can change its list:

```kotlin
customSidebar.viewers.remove(player)
customSidebar.viewers.add(anotherPlayer)
```