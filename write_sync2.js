// var fs = require("fs");
// console.log("Starting");
// fs.writeFileSync("./files/myfile_sync.txt", "Hello, synchronously");
// console.log("Finished");

var fs = require("fs");
console.log("Starting");
fs.writeFile("./files/myfile_async.txt", "Hello, asynchronously", function(error) {
  console.log("file written");
});
console.log("Finished");
