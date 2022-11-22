var http = require('http');
var fs = require('fs');

// don't think I need to create a server for this to work
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
// note: file creation worked without server program. Wrote to the console eventually.
