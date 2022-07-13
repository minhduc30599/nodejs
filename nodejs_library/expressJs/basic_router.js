const express = require('express');
const app = express();
const port = 3000;

// response with hello world on home page
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// response with post request on route '/'
app.post('/', (req, res) => {
  res.send('Got a POST request')
});

// response with put request on route '/user'
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});


// response with delete request on route '/user'
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

app.listen(port);