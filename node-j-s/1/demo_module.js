var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    // req represents request from client
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 200 means everything's ok. the content-type code chunk specifies an html output
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);