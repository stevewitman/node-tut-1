var mongo = require("mongodb");
var host = "127.0.0.1";
// var port = mongo.Connection.DEFAULT_PORT;
var port = 27017;


function getUser(id, callback) {

  var db = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}));
  db.open(function(error) {
    console.log("Connected to MongoDB: " + host + ":" + port);
    db.collection("user", function(error, collection) {
      console.log("We have the collection");
      collection.find({"id":id.toString()}, function(error, cursor) {
        cursor.toArray(function(error, users) {
          if (users.length === 0) {
            // console.log("No user found");
            callback(false);
          } else {
            // console.log("Found " + users[0]);
            callback(users[0]);
          }
        });
      });
    });
  });
}

getUser(2, function(user) {
  if (!user) {
    console.log("No user found");
  } else {
    console.log("User: ",  user);
  }
});

getUser(1, function(user) {
  if (!user) {
    console.log("No user found");
  } else {
    console.log("User: ",  user);
  }
});

getUser(3, function(user) {
  if (!user) {
    console.log("No user found");
  } else {
    console.log("User: ",  user);
  }
});
