const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

// Make connection
// https://mongoosejs.com/docs/connections.html#error-handling
// mongoose.connect("mongodb://localhost:27017/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//create Schemas & model
const UserSchema =  new Schema({
    username: String,
    password: String,
    name: String,
    orders: [anotherSchema],

})

