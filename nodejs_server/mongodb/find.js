var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');
  // find single document in collection

  // dbo.collection("customers").findOne({ name: 'John' }, function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // })

  // find all documents in collection

  // dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // })
});