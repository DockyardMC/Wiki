# Red Screen Tint

## Overview

This feature utilizes border warning distance to tint sides the players screen red

## Usage

You can set `redVignette` field on player object to any value between `0f` and `1f` 

```kotlin
player.redVignette.value = 1f //full red screen tint
player.redVignette.value = 0f //no red screen tint
```