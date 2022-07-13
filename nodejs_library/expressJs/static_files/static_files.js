const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("./"));
app.use('/static', express.static("./"));

app.listen(port, () => {
  console.log("App run successfully");
});