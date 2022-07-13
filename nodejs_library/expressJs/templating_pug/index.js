const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set('views', './views');

app.get("/", function (req, res, next) {
  res.render("index", {
    name: "Minh Duc Nguyen",
    url: "https://google.com",
    user: { name: "Minh Duc Nguyen", age: "23" }
  });
});

app.listen(3000);