const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


//create user Schemas & model
const UserSchema =  new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: String,
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],

})

const User = mongoose.model('user');