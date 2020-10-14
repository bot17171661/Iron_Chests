IDRegistry.genBlockID("silverChest");
Block.createBlockWithRotation("silverChest", [
	{name: "Silver Chest", texture: [["silver_chest", 0], ["silver_chest", 0], ["silver_chest", 2], ["silver_chest", 1], ["silver_chest", 2], ["silver_chest", 2]], inCreative: true}
], "iron_chest");
ToolAPI.registerBlockMaterial(BlockID.silverChest, "stone", 1, true);
Block.setDestroyLevel(BlockID.silverChest, 1);
CustomChest.setChestRender(BlockID.silverChest);

let guiSilverChest = CustomChest.createChestGui("Silver Chest", 72);

class SilverChestTE extends GenericIronChestTE {
	constructor() {
		super(guiSilverChest);
	}

	click(id, count, data, coords, player, extra) {
		if (id == ItemID.silverGoldUpgrade) {
			this.upgrade(BlockID.goldChest, player);
			return true;
		}
		return false;
	}
}

TileEntity.registerPrototype(BlockID.silverChest, new SilverChestTE());
