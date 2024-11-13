# Event List
## `ClientInputEvent`
This event is dispatched when player uses movement input

Event is cancellable: `false`

Fields:
- backward: `boolean`
- forward: `boolean`
- jump: `boolean`
- left: `boolean`
- player: `Player`
- right: `boolean`
- shift: `boolean`
- sprint: `boolean`

## `ClientTickEndEvent`
This event is dispatched when the current tick of client ends executing

Event is cancellable: `false`

Fields:
- player: `Player`

## `CommandExecuteEvent`
This event is dispatched when command gets executed

Event is cancellable: `true`

Fields:
- command: `Command`
- executor: `CommandExecutor`
- raw: `String`

## `CommandSuggestionEvent`
This event is dispatched when client requests command suggestions

Event is cancellable: `true`

Fields:
- command: `String`
- player: `Player`

## `EntityDamageEvent`
This event is dispatched when entity takes damage

Event is cancellable: `true`

Fields:
- attacker: `Entity?`
- damage: `float`
- damageType: `DamageType`
- entity: `Entity`
- projectile: `Entity?`

## `EntityDeathEvent`
This event is dispatched when entity dies

Event is cancellable: `true`

Fields:
- entity: `Entity`

## `EntityViewerAddEvent`
This event is dispatched when viewer is added to an entity viewer list

Event is cancellable: `true`

Fields:
- entity: `Entity`
- viewer: `Player`

## `EntityViewerRemoveEvent`
This event is dispatched when viewer is removed from entity viewer list

Event is cancellable: `true`

Fields:
- entity: `Entity`
- viewer: `Player`

## `HorseJumpEvent`
This event is dispatched when player's horse starts or stops jumping

Event is cancellable: `false`

Fields:
- isJumping: `boolean`
- player: `Player`

## `ItemGroupCooldownEndEvent`
This event is dispatched when group or item cooldown ends for a player

Event is cancellable: `false`

Fields:
- cooldown: `Player$ItemGroupCooldown`
- player: `Player`

## `ItemGroupCooldownStartEvent`
This event is dispatched when group or item cooldown starts for a player

Event is cancellable: `true`

Fields:
- cooldown: `Player$ItemGroupCooldown`
- player: `Player`

## `PacketReceivedEvent`
This event is dispatched server receives packet from client

Event is cancellable: `true`

Fields:
- connection: `ChannelHandlerContext`
- id: `int`
- packet: `ServerboundPacket`
- processor: `PlayerNetworkManager`
- size: `int`

## `PacketSentEvent`
This event is dispatched server sends packet to client

Event is cancellable: `true`

Fields:
- connection: `ChannelHandlerContext`
- packet: `ClientboundPacket`
- processor: `PlayerNetworkManager`

## `PlayerBedLeaveEvent`
This event is dispatched when player leaves bed

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerBlockBreakEvent`
This event is dispatched when player breaks a block

Event is cancellable: `true`

Fields:
- block: `Block`
- location: `Location`
- player: `Player`

## `PlayerBlockPlaceEvent`
This event is dispatched when player places a block

Event is cancellable: `true`

Fields:
- block: `Block`
- location: `Location`
- player: `Player`

## `PlayerBlockRightClickEvent`
This event is dispatched when player interacts with block (right click)

Event is cancellable: `false`

Fields:
- block: `Block`
- face: `Direction`
- heldItem: `ItemStack`
- location: `Location`
- player: `Player`

## `PlayerChangeWorldEvent`
This event is dispatched when player changes worlds

Event is cancellable: `false`

Fields:
- newWorld: `World`
- oldWorld: `World`
- player: `Player`

## `PlayerChatMessageEvent`
This event is dispatched when player sends a chat message

Event is cancellable: `true`

Fields:
- message: `String`
- player: `Player`

## `PlayerClientConfigurationEvent`
This event is dispatched server receives information about client's configuration (client settings)

Event is cancellable: `false`

Fields:
- configuration: `ClientConfiguration`
- player: `Player`

## `PlayerConnectEvent`
This event is dispatched player connects to the server, before joining

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerDamageEntityEvent`
This event is dispatched when player attacks another entity

Event is cancellable: `true`

Fields:
- entity: `Entity`
- player: `Player`

## `PlayerDamageEvent`
This event is dispatched when player is damaged

Event is cancellable: `true`

Fields:
- attacker: `Entity?`
- damage: `float`
- damageType: `DamageType`
- player: `Player`
- projectile: `Entity?`

## `PlayerDeathEvent`
This event is dispatched when player dies

Event is cancellable: `true`

Fields:
- player: `Player`

## `PlayerDisconnectEvent`
This event is dispatched when player disconnects

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerDropItemEvent`
This event is dispatched when player drops item

Event is cancellable: `true`

Fields:
- itemStack: `ItemStack`
- player: `Player`

## `PlayerElytraFlyingStartEvent`
This event is dispatched when player starts flying with elytra (not flight state change)

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerEnterBoundEvent`
This event is dispatched when player enters a bound

Event is cancellable: `false`

Fields:
- bound: `Bound`
- player: `Player`

## `PlayerEnterChunkEvent`
This event is dispatched when player enters new chunk

Event is cancellable: `false`

Fields:
- chunk: `Chunk?`
- chunkIndex: `long`
- player: `Player`

## `PlayerEquipEvent`
This event is dispatched when player equips piece of equipment

Event is cancellable: `false`

Fields:
- item: `ItemStack`
- player: `Player`
- slot: `EquipmentSlot`

## `PlayerFlightToggleEvent`
This event is dispatched when player toggles flight

Event is cancellable: `true`

Fields:
- flying: `boolean`
- player: `Player`

## `PlayerInteractAtEntityEvent`
This event is dispatched when player interacts with entity. Provides XYZ of click point unlike normal PlayerInteractWithEntityEvent

Event is cancellable: `true`

Fields:
- clickPoint: `Vector3f`
- entity: `Entity`
- interactionHand: `PlayerHand`
- player: `Player`

## `PlayerInteractWithEntityEvent`
This event is dispatched when player interacts with an entity

Event is cancellable: `true`

Fields:
- entity: `Entity`
- interactionHand: `PlayerHand`
- player: `Player`

## `PlayerJoinEvent`
This event is dispatched when player enters the PLAY phase

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerLeaveBoundEvent`
This event is dispatched When player leaves a bound

Event is cancellable: `false`

Fields:
- bound: `Bound`
- player: `Player`

## `PlayerLeaveEvent`
This event is dispatched when player leaves the server (during PLAY phase)

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerMoveEvent`
This event is dispatched player moves or rotates their head

Event is cancellable: `true`

Fields:
- isOnlyHeadMovement: `boolean`
- newLocation: `Location`
- oldLocation: `Location`
- player: `Player`

## `PlayerRespawnEvent`
This event is dispatched when player respawns after dying

Event is cancellable: `false`

Fields:
- player: `Player`

## `PlayerRightClickWithItemEvent`
This event is dispatched when player right clicks with item in hand

Event is cancellable: `true`

Fields:
- item: `ItemStack`
- player: `Player`

## `PlayerSelectedHotbarSlotChangeEvent`
This event is dispatched when player changes their held slot

Event is cancellable: `true`

Fields:
- player: `Player`
- slot: `int`

## `PlayerSendFeatureFlagsEvent`
This event is dispatched server sends feature flags to client during configuration

Event is cancellable: `false`

Fields:
- featureFlags: `List<FeatureFlag>`

## `PlayerSneakToggleEvent`
This event is dispatched when player's sneaking state changes

Event is cancellable: `false`

Fields:
- player: `Player`
- sneaking: `boolean`

## `PlayerSpawnEvent`
This event is dispatched when player is in configuration phase and needs initial world to spawn in

Event is cancellable: `false`

Fields:
- player: `Player`
- world: `World`

## `PlayerSprintToggleEvent`
This event is dispatched when player changes sprinting state

Event is cancellable: `false`

Fields:
- player: `Player`
- sprinting: `boolean`

## `PlayerSwingHandEvent`
This event is dispatched when player swings their hand

Event is cancellable: `false`

Fields:
- hand: `PlayerHand`
- player: `Player`

## `PlayerVehicleInventoryOpenEvent`
This event is dispatched when player opens vehicle's inventory while riding it

Event is cancellable: `true`

Fields:
- player: `Player`

## `PluginMessageReceivedEvent`
This event is dispatched server receives plugin message from client (Custom Payload Packet)

Event is cancellable: `true`

Fields:
- channel: `String`
- data: `ByteBuf`
- player: `Player`

## `RegisterPluginChannelsEvent`
This event is dispatched when server receives the minecraft:register plugin message with list of custom channels

Event is cancellable: `false`

Fields:
- channels: `List<String>`
- player: `Player`

## `ServerBrandEvent`
This event is dispatched server sends the server brand to client during configuration

Event is cancellable: `false`

Fields:
- brand: `String`

## `ServerFinishLoadEvent`
This event is dispatched server finishes loading

Event is cancellable: `false`

Fields:
- server: `DockyardServer`

## `ServerListPingEvent`
This event is dispatched client requests motd/status

Event is cancellable: `false`

Fields:
- status: `ServerStatus`

## `ServerStartEvent`
This event is dispatched server starts (before loading starts)

Event is cancellable: `false`

Fields:

## `ServerTickEvent`
This event is dispatched when server ticks

Event is cancellable: `false`

Fields:
- serverTicks: `int`

## `UnregisterPluginChannelsEvent`
This event is dispatched when server receives the minecraft:unregister plugin message with list of custom channels

Event is cancellable: `false`

Fields:
- channels: `List<String>`
- player: `Player`

## `WorldFinishLoadingEvent`
This event is dispatched when world is finished loading

Event is cancellable: `false`

Fields:
- world: `World`

