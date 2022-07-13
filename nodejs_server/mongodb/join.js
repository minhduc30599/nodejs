var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://minhduc3051999:MinhDuc99@cluster0.gokr94u.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db('mydb');

  dbo.collection('customers').aggregate([
    {
      $lookup:
      {
        from: 'sellers',
        localField: 'address',
        foreignField: 'address',
        as: 'Collab-Company'
      }
    }
  ]).toArray(function (err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});