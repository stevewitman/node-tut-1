var fs = require("fs");
console.log("Starting ...");
var contents = fs.readFileSync("files/config.json")
console.log("contents: " + contents);
var config = JSON.parse(contents);
console.log("config: ",  config);
console.log("username: " + config.username);

// execute rest of code after reading a config file synchronously
