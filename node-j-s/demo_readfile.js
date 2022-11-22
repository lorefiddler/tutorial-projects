var http = require('http');
var fs = require('fs');
// loads File System module

http.createServer(function (req, res) {
// uses http package to create a server program with the following function
    fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
