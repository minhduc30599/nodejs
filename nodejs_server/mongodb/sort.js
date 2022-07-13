var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');
  // sort result (1: ascending/-1: descending)

  // dbo.collection('customers').find().sort({ _id: -1 }).toArray(function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // });
});