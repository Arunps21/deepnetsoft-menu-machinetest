const express = require("express")
const router = express.Router()
const { createMenu, getMenus } = require("../controllers/menuController")

router.route("/createMenu").post(createMenu)
router.route("/getmenu").get(getMenus)

module.exports = router