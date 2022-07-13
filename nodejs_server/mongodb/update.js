var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');
  // update document

  // dbo.collection('customers').updateOne({ address: 'Valley 345' }, { $set: { name: "Mickey", address: "Canyon 123" } }, function (err, res) {
  //   if (err) throw err;
  //   console.log('1 document updated');
  //   db.close();
  // });

  // update only specific fields

  // dbo.collection('customers').updateOne({ address: 'Canyon 123' }, { $set: { address: "Canyon 456" } }, function (err, res) {
  //   if (err) throw err;
  //   console.log('1 document updated');
  //   db.close();
  // });

  // update multiple documents

  dbo.collection('customers').updateMany({ address: /^S/ }, { $set: { address: "Minnie" } }, function (err, res) {
    if (err) throw err;
    console.log('1 document updated');
    db.close();
  });
});