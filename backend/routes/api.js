const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");
const { MongoClient } = require("mongodb");

require("dotenv").config()



const uri = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const collection = client.db("restaurantDB").collection("menu");



//get a collection of menu items
router.get("/", async (req, res) => {
  try{
  await client.connect();
 const items = await collection.find({}).toArray()
  res.send(items);
  await client.close()
  }catch(err){
    console.log(err)
  }
});

//get a menu item document
router.get("/:id", async (req, res) => {
     const itemfind = await MenuItem.findOne({_id: req.params.id})
     res.send(itemfind)
});
    

//add a new menu item to menu collection
router.post("/:id", async (req, res, next) => {
  const itemCreate = await MenuItem.create(req.body).catch(next);
  res.send(itemCreate);
});

//update the menu item
router.put("/:id", async(req, res, next) => {
  const itemUpdate = await MenuItem.findByIdAndUpdate({_id: req.params.id}, req.body).catch(next);
  const findUpdate = await MenuItem.findOne({_id: req.params.id})
  res.send(findUpdate);
});

//delete a menu item
router.delete("/:id", async(req, res, next) => {
    const itemId = await MenuItem.findByIdAndRemove({_id: req.params.id}).catch(next);
    res.send(itemId)
    console.log(itemId._id + " has been deleted")

  
});

module.exports = router;
