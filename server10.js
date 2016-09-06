var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var mongo = require("mongodb");
var dbHost = "127.0.0.1";
var dbPort = 27017;

var app = express();

app.get("/user/:id", function(req, res) {
  getUser(req.params.id, function(user) {
    if (!user) {
      res.send("User does not exist", 404);
    } else {
      res.send("<a href='http://twitter.com/" + user.twitter + "'> Follow " + user.name + " on twitter</a>");
    }
  });
});

app.listen(port, host);

function getUser(id, callback) {
  var db = new mongo.Db("nodejs-introduction", new mongo.Server(dbHost, dbPort, {}));
  db.open(function(error) {
    console.log("Connected to MongoDB: " + dbHost + ":" + dbPort);
    db.collection("user", function(error, collection) {
      console.log("We have the collection");
      collection.find({"id":id.toString()}, function(error, cursor) {
        cursor.toArray(function(error, users) {
          if (users.length === 0) {
            callback(false);
          } else {
            callback(users[0]);
          }
        });
      });
    });
  });
}
