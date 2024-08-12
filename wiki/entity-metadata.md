---
next:
  text: 'Layering Entity Metadata'
  link: '/wiki/layering-entity-meta'
prev: false
---

# Entity Metadata

## Overview

Entity metadata is stored in `BindableMap<EntityMetadataType, EntityMetadata>` where `EntityMetadataType` is the type of the metadata (duh) and `EntityMetadata` contains the actual data

### `EntityMetadata`:
- `type` which is the type of the entity metadata
- `writer` which is the writer of the value (ex. EntityMetadataByteBufWriter.VAR_INT)
- `value` which is the actual value of the metadata

## Usage

You can set entity's metadata by setting value in the `metadata` map that is part of the entity class:

```kotlin
//set player's pose to sleeping
player.metadata[EntityMetadataType.POSE] = EntityMetadata(EntityMetadataType.POSE, EntityMetadataByteBufWriter.POSE, EntityPose.SLEEPING)
```

--- 

You can also remove it like with any other mutable map:

```kotlin
player.metadata.remove(EntityMetadataType.POSE)
```

---

To set the `STATE` metadata type, you probably want to use the built-in utility function `getEntityMetadataState` which provides nice dsl builder syntax and returns `EntityMetadata` object:

```kotlin
player.metadata[EntityMetadataType.STATE] = getEntityMetadataState(player) {
    isGlowing = true
    isInvisible = false
    isFlying = true
}
```

---

::: tip
See also [Entity Metadata Layering](layering-entity-meta) for client-side metadata changes
:::