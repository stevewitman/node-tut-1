// read file asynchronously
// var fs = require("fs");
// console.log('Starting...');
// fs.readFile("files/sample.txt", function(error, data) {
//   console.log('contents:' + data);
// })
// console.log('...continue execution');


// read file synchronously
var fs = require("fs");
console.log('Starting...');
var content = fs.readFileSync("files/sample.txt")
console.log('contents: ' + content);
console.log('...continue execution');
