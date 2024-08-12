---
next: false
prev:
  text: 'Entity Metadata'
  link: '/wiki/entity-metadata'
---
# Layering Entity Metadata

## How it works

Layering entity metadata per player allows for client-side changes to entities for purposes like client-side glowing and client-side invisibility

It works like this:
- Entity has one base `BindableMap<EntityMetadataType, EntityMetadata>`
- Entity also has `metadataLayers` which is `BindableMap<PersistentPlayer, MutableMap<EntityMetadataType, EntityMetadata>`
- When `ClientboundSetEntityMetadataPacket` is gets created, it looks up the metadata layers and gets layer of the receiving player.
- It merges player`s layer on top of entity's base metadata and that gets sent to the player

::: info
`metadataLayers` uses `PersistentPlayer` as the key in the map meaning it will remain and still work when player disconnects and re-connects
:::

## Usage

```kotlin
// Spawn an entity
val entity = world.spawnEntity(Pig(location, world))

// get the metadata layer of player or create new one if it doesn't exist
val playerMetadataLayer = entity.metadataLayers[player.toPersistent()] ?: mutableMapOf<EntityMetadataType, EntityMetadata>()

// create metadata with EntityMetaIndex.STATE and EntityMetadataType.BYTE that contains things like isGlowing, isInvisible etc.
// I use utility function here because state requires bitmask of values, this makes it easier
val entityState = getEntityMetadataState(entity) {
    isGlowing = true
}
// add the metadata to the list 
playerMetadataLayer[EntityMetadataType.STATE] = entityState

// set players layer on that entity to the list of metadata
// use player.toPersistent() because the entity uses PersistentPlayer to store this information
entity.metadataLayers[player.toPersistent()] = playerMetadataLayer
```
With the example above, the entity will glow only for the specified player. For setting clientside glowing or invisibility, you can also use `entity.setGlowingFor(player, true)` or `entity.setInvisibleFor(player, true)` which will do all of this automatically for you

---

```kotlin
// spawn warden
val warden = world.spawnEntity(Warden(location, world))

// get the metadata layer of player or create new one if it doesn't exist
val playerMetadataLayer = warden.metadataLayers[player.toPersistent()] ?: mutableMapOf<EntityMetadataType, EntityMetadata>()

// create new EntityMetadata with index and type pose
val pose = EntityMetadata(EntityMetadataType.POSE, EntityMetadataByteBufWriter.POSE, EntityPose.ROARING)

// add the pose to the list
playerMetadataLayer[EntityMetadataType.POSE] = pose
warden.metadataLayers[player.toPersistent()] = playerMetadataLayer
```

With the example above you can make the specified player see the warden roaring!

---

To remove a metadata from layer, you can simply use `MutableMap<EntityMetadataType, EntityMetadata>.remove(entityMetaIndex)` like you would do with any mutable map:

```kotlin
warden.metadataLayers[player.toPersistent()]?.remove(EntityMetaIndex.POSE)
```

You can also remove the entire layer with:
```kotlin
entity.metadataLayers.remove(player.toPersistent())
```
