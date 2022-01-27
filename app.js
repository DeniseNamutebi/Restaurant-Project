var mongoose = require('mongoose');

main().catch(err => console.log(err));

var mongoDB = 'mongodb://127.0.0.1/RestaurantsCluster';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));