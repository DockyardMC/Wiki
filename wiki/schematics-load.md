---
next:
  text: 'Saving Schematics'
  link: '/wiki/schematics-save'
prev: false
---

# Parsing & Placing schematics

## Parsing Schematics

DockyardMC has built-in schematic support. To load a schematic file, use the built-in SchematicReader:

```kotlin
val file = File("./cool_house.schem")
val schematic = SchematicReader.read(file)
```

By default, SchematicReader includes a cache. If you attempt to load the same schematic again (and its content hasn't changed), the previously parsed schematic will be retrieved from the cache instead. You can change this in the [configuration file](wiki/configuration-file)

## Placing Schematics

You can easily place schematic to a world using the following builder-style function:

```kotlin
world.placeSchematic {
    location = location
    schematic = SchematicReader.read(file)
}
```
You can additionally specify a `rotation` field:
- `NONE`
- `CLOCKWISE_90`
- `CLOCKWISE_180`
- `CLOCKWISE_270`

```kotlin
val rotation = SchematicRotation.CLOCKWISE_90
world.placeSchematic(location, schematic, rotation)
```

You can also add specify a `then` field which will be run **synchronously** after the schematic has been placed

```kotlin
val start = System.currentTimeMillis()
world.placeSchematic {
    location = location
    schematic = SchematicReader.read(file)
    then = {
        val end = System.currentTimeMillis()
        player.sendMessage("<yellow>Schematic pasted in <pink>${start - end}ms")
    }
}
```