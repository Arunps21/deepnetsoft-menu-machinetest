const menuModel = require("../models/menuModel")

const createMenu=async(req,res)=>{
    try{
        const {name, description} = req.body
        let menu = await menuModel.findOne({name})
        if(menu){
            res.status(201).json({status:401,msg:"Menu already exists"})
        }
        else{
            let menu = await menuModel.create({
                name,
                description
            })
            res.status(200).json({status:200,msg:"Menu added succesfully",menu})
        }
    }
    catch(err){
        console.log(err.message)
    }
}

const getMenus = async (req, res) => {
    try {
      const menus = await menuModel.find().populate("items")
      res.status(200).json(menus);
    } catch (err) {
      res.status(500).json({ msg: "Error fetching menus", error: err.message });
    }
  };

module.exports = { createMenu, getMenus }