var fs = require('fs');
// loads fs (file system) module. Names it fs.

var rs = fs.createReadStream('./demofile.txt');
// uses fs module's createReadStream function on the demo file. Names this rs for ReadStream.
rs.on('open', function () {
  console.log('The file is open');
// uses rs with "on" to 'open' the file and builds a function that writes text to the console.     
});