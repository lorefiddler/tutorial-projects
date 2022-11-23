var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    // writes url text into what comes up on the page
    res.end();
}).listen(8080);