var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/doctorapi');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
  
  db.collection("company", function(err, collection){
        //collection.find({}).toArray(function(err, data){
            console.log(collection); // it will print your collection data
        //})
    });
});
exports.db = db;