---
prev: false
next: false
---
# Bossbar API

## Overview

A `Bossbar` class contains:
- `title` which is the display name of the bossbar
- `progress` which shows the progress of the bar (value from 0 to 1)
- `color` which is the color of the bossbar (can be `PINK`, `BLUE`, `RED`, `GREEN`, `YELLOW`, `PURPLE` or `WHITE`)
- `notches` which is how many notches will appear on the bossbar (can be `NO_NOCHES`, `SIX`, `TEN`, `TWELVE` or `TWENTY`)
- `viewers` which is a list of players who see the bossbar

::: info
See [Viewer Structure](/wiki/viewers) if you do not understand what a "viewer" is
:::

## Usage

You can create a bossbar for a player using the following code:

```kotlin
val viewerList = BindableList()
viewerList.add(player)

val customBossbar = Bossbar("Custom Bossbar", 0f, BossbarColor.PINK, BossbarNotches.NO_NOTCHES, viewerList)
```

To modify an attribute of a bossbar, you can simply change its value:

```kotlin
customBossbar.title.value = "My new Bossbar"
customBossbar.progress.value = 0.5f
customBossbar.color.value = BossbarColor.BLUE
customBossbar.notches.value = BossbarNotches.TEN
```
To add or remove players from the bossbar viewer, you can change its list:

```kotlin
customBossbar.viewers.remove(player)
customBossbar.viewers.add(anotherPlayer)
```