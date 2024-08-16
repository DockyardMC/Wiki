---
prev: false
next: false
---

# Teams

## Overview

A `Team` class contains:
- `name` which is the unique name every team has. There cannot be multiple teams of the same name
- `color` which is a `LegacyTextColor`
- `teamNameTagVisibility` is either always visible, Hide for other teams, hide for own team or always hidden
- `teamCollisionRule` is either always push, push for other teams, push for own team, never push
- `displayName` which is the display name of the team
- `prefix` which is displayed before the name of the player in tablist
- `suffix` which is displayed after the name of the player in tablist
- `allowFriendlyFire` if true, teammates will be able to hurt each-other
- `seeFriendlyInvisibles` if true, teammates will be able to see each-other when they have invisibility potion

## Usage

You can create and customize teams using the following code:

```kotlin
val customTeam = TeamManager.create("trans-gang", LegacyTextColor.PINK)

customTeam.prefix.value = "<#F5A9B8>[Trans Gang]"
customTeam.teamCollisionRule.value = TeamCollisionRule.NEVER
customTeam.allowFriendlyFire = false
```

To set team of an entity, you can simply set the value of the `team` field on any entity:

```kotlin
player.team.value = customTeam
```

To remove a team, you can simply call `TeamManager.remove`:

```kotlin
TeamManager.remove(customTeam)
```

All entities on that team will have their `team` field automatically set to null