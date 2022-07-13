var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');
  // create collection

  dbo.createCollection("sellers", function (err, db) {
    if (err) throw err;
    console.log('Collection created');
    db.close();
  });
});