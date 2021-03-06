const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


//create Order Schemas & model
const OrderSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    date_of_order: Date,
    items: [{type: Schema.Types.ObjectId, ref: 'MenuItem'}]
})



const Order = mongoose.model('order', OrderSchema);

module.exports = Order;