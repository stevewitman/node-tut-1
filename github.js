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
          created_at: repo.created_at
        });
      })
      callback(repos);
    });
  });
  req.end();
}

module.exports.getRepos = getRepos;
