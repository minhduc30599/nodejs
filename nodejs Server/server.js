var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, {
      "Context-type": "text/html"
    });
    res.write(data);
    return res.end();
  });
  fs.appendFile('index.txt', 'Viet Nam!', function (err) {
    if (err) {
      throw err;
    }
  });
  fs.open('index1.txt', 'w', function (err, file) {
    if (err) throw err;
  });
  fs.writeFile('index.txt', 'Hello Minh Duc Nguyen', function (err) {
    if (err) throw err;
  });
  //split query string
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  // res.write('Your URL is ' + req.url);
}).listen(8080);