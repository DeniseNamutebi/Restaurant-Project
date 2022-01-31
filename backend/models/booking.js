const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');
const { default: Booking } = require('../../frontend/src/components/booking');
const Schema = mongoose.Schema;


//create user & booking Schemas & model
const BookingSchema = new Schema({
    guests: Number,
    bookingDate: Date,
    time: Timestamp,
    user: []
})



const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;