const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var myReadStream = fs.createReadStream(__dirname + '/welcome.html');
  myReadStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log('Listening at Port 3000');
  console.log(`Server running at http://${hostname}:${port}/`);
}); 