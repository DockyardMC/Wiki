---
prev: false
next:
  text: 'Text Displays'
  link: '/wiki/text-displays'
---

# Base Display Entity

This is the base entity class for all other display entities and cannot be spawned on its own

`DisplayEntityBase` has:
 - `interpolationDelay` which is `Int`
 - `transformInterpolation` which is `Int`
 - `translationInterpolation` which is `Int`
 - `translation` which is `Vector3f`
 - `scale` which is `Vector3f`
 - `rotation` which is `Vector3f`
 - `billboard` which is `DisplayBillboard`
 - `brightness` which is `Int`
 - `viewRange` which is `Float`
 - `shadowRadius` which is `Float`
 - `shadowStrength` which is `Float`
 - `glowColor` which is `CustomColor`

## Usage

You can't spawn this entity. Spawn either [Text Display](text-displays), [Item Display](item-displays) or [Block Display](block-displays)

All display entities also have following utility functions:

- `scaleTo(x: Float, y: Float, z: Float, interpolation: Int?)`
- `translateTo(x: Float, y: Float, z: Float, interpolation: Int?)`
- `rotateTo(x: Float, y: Float, z: Float, interpolation: Int?)`
- `rotateBy(x: Float, y: Float, z: Float, interpolation: Int?)`