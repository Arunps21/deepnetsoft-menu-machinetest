const express = require("express");
const router = express.Router();
const { createItem, getItem } = require("../controllers/itemController");

router.route("/createItem").post(createItem);
router.route("/getItems").get(getItem)

module.exports = router;
