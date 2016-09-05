var https = require("https");

function getRepos(username, callback) {
  var options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  }

  var req = https.request(options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk.toString('utf8')
    });
    res.on('end', function() {
      // console.log("Body: ", body)
      var repos = [];
      var json = JSON.parse(body);
      json.forEach(function(repo) {
        repos.push({
          name: repo.name,
          description: repo.description
        });
      })
      callback(repos);
    });
  });
  req.end();
}

getRepos('stevewitman', function(repos) {
  console.log("repos: ", repos.length);
})
