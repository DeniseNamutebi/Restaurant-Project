const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");


//add a booking
router.post("/:id", async (req, res, next) => {
  const bookingCreate = await Booking.create(req.body).catch(next);
  res.send(bookingCreate);
});

//update 
router.put("/:id", async(req, res, next) => {
  const bookingUpdate = await Booking.findByIdAndUpdate({_id: req.params.id}, req.body).catch(next);
  const findUpdate = await Booking.findOne({_id: req.params.id})
  res.send(findUpdate);
});

//delete
router.delete("/:id", async(req, res, next) => {
    const bookingId = await Booking.findByIdAndRemove({_id: req.params.id}).catch(next);
    res.send(bookingId)
    console.log(bookingId._id + " has been deleted")

  
});

module.exports = router;