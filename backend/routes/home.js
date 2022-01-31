const express = require("express");
const router = express.Router();

//get a collection of menu items
router.get("/", async (req, res) => {
res.send('home')
  });
  


module.exports = router;