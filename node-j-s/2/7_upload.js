var http = require('http');
var formidable = require('formidable');
// formidable parses uploaded file once it reaches the server

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
    // if the incoming request includes /fileupload,
      var form = new formidable.IncomingForm();
      // create the variable 'form' to use the IncomingForm function from formidable
      form.parse(req, function (err, fields, files) {
        res.write('File uploaded');
        res.end();
        // then use the 'parse' function available through the created 'form' variable
        // to place the file on a temporary folder in your computer
        // and to respond with the words 'File uploaded'
      });
    } else {
    // if those conditions aren't met, write this form.
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);