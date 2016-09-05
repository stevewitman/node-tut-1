var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.send("Root directory");
});

// app.get("/:text", function(req, res) {
//   res.send(req.params.text);
// });

var users = {
  "1": {
    "name": "Steph Curry",
    "twitter": "stephcurry"
  },
  "2": {
    "name": "Kevin Durant",
    "twitter": "kevindurant"
  }
}


app.get("/user/:id", function(req, res) {
  var user = users[req.params.id];
  if (user) {
    res.send("<a href='http://twitter.com/" + user.twitter + "'> Follow " + user.name + " on Twitter</a>")
  } else {
    res.send("Cannot find user")
  }
})

app.listen(port, host, function() {
  console.log("listening on port " + port);
});
