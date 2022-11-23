var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.open('mynewfile2.txt', 'w', function (err, file) {
    // w is for writing
        if (err) throw err;
        console.log('Saved!');
      });
}).listen(8080);