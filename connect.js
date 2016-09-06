var mongo = require("mongodb");
var host = "127.0.0.1";
var port = 27017;



var db = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));
db.open(function(error) {
  console.log("Connected to MongoDB: " + host + ":" + port);
  db.collection("user", function(error, collection) {
    console.log("We have the collection");
    collection.insert({
        id: "1",
        name: "Steph Curry",
        twitter: "stephcurry",
        email: "scurry@gmial.com"
      }, function() {
        console.log("Inserted Steph");
    });
    collection.insert({
        id: "2",
        name: "Kevin Durant",
        twitter: "kevindurant",
        email: "kd@okc.com"
      }, function() {
        console.log("Inserted KD");
    });
  });
});
