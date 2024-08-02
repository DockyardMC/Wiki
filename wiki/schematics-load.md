# Parsing & Placing schematics

## Parsing Schematics

DockyardMC has built-in schematic support. To load a schematic file, use the built-in SchematicReader:

```kotlin
val file = File("./cool_house.schem")
val schematic = SchematicReader.read(file)
```

By default, SchematicReader includes a cache. If you attempt to load the same schematic again (and its content hasn't changed), the previously parsed schematic will be retrieved from the cache instead. You can change this in the [configuration file](wiki/configuration-file)

## Placing Schematics

You can easily place schematic to a world using the following code:

```kotlin
world.placeSchematic(location, schematic)
```

You can additionally specify a rotation by adding `SchematicRotation` as last parameter

You can use one of these 4 types:
- `NONE`
- `CLOCKWISE_90`
- `CLOCKWISE_180`
- `CLOCKWISE_270`

```kotlin
val rotation = SchematicRotation.CLOCKWISE_90
world.placeSchematic(location, schematic, rotation)
```

By default, schematic placing is ran asynchronously and chunk updates are sent afterward. You can change this in the [configuration file](wiki/configuration-file)

::: danger
Schematic placing relies on block states which are not fully implemented yet. Temporarily, missing block states are replaced by red stained glass.
:::

