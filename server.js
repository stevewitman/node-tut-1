var http = require("http");

console.log("Starting ...");
var host = "127.0.0.1";
var port = 1337;
var server = http.createServer(function(request, response) {
  console.log("Received request: " + request.url);
  response.writeHead(200, {"Content-type":"text/plain"});
  response.write("Here is some content");
  response.end();
  // you can combine response.write and response.end into one line, like this
  // response.end("Here is some content")
});
server.listen(port, host, function() {
  console.log("Listening " + host + ":" + port);
});
