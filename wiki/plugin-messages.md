# Plugin Messages

## Overview

Dockyard has a plugin message system that is similar to how packets are handled. `PluginMessages` object has a `MutableMap<String, KClass<out PluginMessageHandler>>` where the **String** is the channel (ex. `minecraft:brand`) and **KClass** is the class that handles the plugin message (ex. `BrandPluginMessage::class`)

**PluginMessageHandler has:**
- `Companion.read(buffer: ByteBuf)` which reads the payload and returns the class instance 
- `handle(player: Player)` which handles the plugin message when its received
- `write(buffer: ByteBuf)` which writes the payload (only if the plugin message is clientbound or is both-sides)
- `sendPacket(channel: String)` which returns a `ClientboundPluginMessage` packet that can be sent to the client

## Usage

Let's make a class that handles the [brand plugin message](https://wiki.vg/Plugin_channels#minecraft:brand) as an example:

```kotlin
class BrandPluginMessage(val brand: String): PluginMessageHandler() {

    companion object {
        fun read(buf: ByteBuf): BrandPluginMessage {
            return BrandPluginMessage(buf.readString())
        }
    }

    override fun handle(player: Player) {
        log("Received client brand from $player: $brand", LogType.DEBUG)
        player.brand = brand
    }

    override fun write(buffer: ByteBuf) {
        buffer.writeUtf(brand)
    }
}
```

then we need to register it in the `PluginMessages` object:

```kotlin
PluginMessages.channels["minecraft:brand"] = BrandPluginMessage::class
```

We can also send the plugin message because this plugin message is both clientbound and serverbound. When received it contains the brand of the player, when sent, it should contain the brand of the server:

```kotlin
Events.on<PlayerConnectEvent> {
    val brand = BrandPluginMessage("DockyardMC")
    it.player.sendPacket(brand.asPacket("minecraft:brand"))
}
```

## "Register and Unregister Channels" plugin messages

The message `minecraft:register` and `minecraft:unregister` are both handled by default. To get their contents, you can listen on `RegisterPluginChannelsEvent` and `UnregisterPluginChannelsEvent` events