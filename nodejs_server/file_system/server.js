var http = require('http');
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
  fs.unlink('index.txt', function(err) {
    if(err) throw err;
  });
  fs.rename('index1.txt', 'index.txt', function(err) {
    if(err) throw err;
  })
}).listen(8080);