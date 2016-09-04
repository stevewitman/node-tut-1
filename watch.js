var fs = require("fs");
console.log("started...");
var config = JSON.parse(fs.readFileSync("files/config.json"));
console.log('initial config: ', config);

fs.watch("files/config.json", function(current, previous) {
  console.log("config changed");
  config = JSON.parse(fs.readFileSync("files/config.json"));
  console.log("new config file: ", config);
})
