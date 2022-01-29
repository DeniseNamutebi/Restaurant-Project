const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


//create user & booking Schemas & model
const BookingSchema = new Schema({
    guests: Number,
    date: Date,
    time: Timestamp,

})

const UserSchema =  new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: String,
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    bookings: [BookingSchema]
})


const User = mongoose.model('user', UserSchema);

module.exports = User;