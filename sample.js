var fs = require("fs");
console.log('Starting...');
fs.readFile("files/sample.txt", function(error, data) {
  console.log('contents:' + data);
})
console.log('...continue execution');
