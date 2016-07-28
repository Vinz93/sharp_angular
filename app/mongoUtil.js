var MongoClient = require('mongodb').MongoClient;
// var _db;
module.exports ={
  connect: function() {
    MongoClient.connect('mongodb://localhost:27017/sharp-notes', function(err, db) {
        if (err) {
          console.log("Error connecting to mongo");
          process.exit(1);
        }
         _db = db;
        console.log("connected to mongo");
    });
  },
  notes: function () {
    return _db.collection('notes');
  },
  users: function () {
    return _db.collection('users');
  },
  categories: function () {
    return _db.collection('categories');
  }
}
