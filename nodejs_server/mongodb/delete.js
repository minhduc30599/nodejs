var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');
  // delete single document in collection

  // dbo.collection('customers').deleteOne({ address: 'Mountain 21' }, function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // });

  // delete multiple documents in collection
  // dbo.collection('customers').deleteMany({ address: /^O/ }, function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  //   db.close();
  // });

  // delete collection

  // dbo.collection('customers').drop(function (err, delOK) {
  //   if (err) throw err;
  //   else if (delOK) console.log('Deleted successfully');
  //   db.close();
  // });

  // or 

  dbo.dropCollection('people', function (err, delOK) {
    if (err) throw err;
    else if (delOK) console.log('Deleted successfully');
    db.close();
  });
});