const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create MenuItem Schemas & model
const MenuItemSchema = new Schema({
  Course: {
    type: String,
    required: "field is required",
  },
  Name: {
    type: String,
    unique: true
 },
  Price: Number,
  InStock: Number,
  Img: String,
});

const MenuItem = mongoose.model("menu", MenuItemSchema, "menu");

module.exports = MenuItem;
