// write to file synchronously (rarely used)
var fs = require("fs");
console.log("starting...");
fs.writeFileSync("files/write_sync.txt", "hello world (synchronous)")
console.log("finished");


// write to file asynchronously (more commonly used)
var fs = require("fs");
console.log("starting...");
fs.writeFile("files/write_async.txt", "hello world (asynchronous)", function(error) {
  console.log("written file");
})
console.log("finished");
