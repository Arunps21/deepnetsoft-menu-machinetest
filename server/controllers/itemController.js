const itemModel = require("../models/itemModel");
const menuModel = require("../models/menuModel");

const createItem = async (req, res) => {
  try {
    const { name, description, price, menuId } = req.body;
    const menu = await menuModel.findOne({ _id: menuId });
    if (!menu) {
      res.status(404).json({ msg: "Menu not found" });
    } else {
      const item = await itemModel.create({
        name,
        description,
        price,
        menu: menuId,
      });
      menu.items.push(item._id);
      await menu.save();
      res
        .status(200)
        .json({ status: 200, msg: "Item added successfully", item });
    }
  } catch (err) {
    console.log(err);
  }
};

const getItem = async (req, res) => {
  try {
    const items = await itemModel.find().populate('menu', 'name description');
    res.status(200).json(items);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { createItem, getItem };
