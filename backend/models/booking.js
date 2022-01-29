const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


//create Booking Schema & model
const BookingSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    guests: Number,
    date: Date,
    time: Timestamp,

})

BookingSchema
.virtual('url')
.get(function () {
  return '/menu/book/' + this._id;
});

const Booking = mongoose.model('booking');