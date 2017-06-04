var Mongoose = require('mongoose');
Mongoose.connect('mongodb://174.138.51.160:27017/doctorapi');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});
exports.db = db;