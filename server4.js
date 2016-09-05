var github = require("./github.js");

github.getRepos("stevewitman", function(repos) {
  console.log("repos: ", repos);
});
