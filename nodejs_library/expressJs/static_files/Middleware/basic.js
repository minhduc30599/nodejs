var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/things', function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});

// Route handler that sends the response
app.get('/things', function (req, res) {
  res.send('Things');
});

app.listen(3000);

// add next() when finish function, if not next route never execute
// next is called middleware between request/response

// middleware is used for filtering request or adjusting response before sending to users

// Các chức năng mà middleware có thể thực hiện trong ExpressJS sẽ bao gồm :

// Thực hiện bất cứ đoạn code nào
// Thay đổi các đối tượng request và response
// Kết thúc một quá trình request-response
// Gọi hàm middleware tiếp theo trong stack
// Trong Express, có 5 kiểu middleware có thể sử dụng :

// Application-level middleware (middleware cấp ứng dụng)
// Router-level middleware (middlware cấp điều hướng - router)
// Error-handling middleware (middleware xử lý lỗi)
// Built-in middleware (middleware sẵn có)
// Third-party middleware (middleware của bên thứ ba)