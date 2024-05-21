// 2. http:

// The http module allows us to create HTTP servers and clients. We can use it to build web applications that handle HTTP requests and responses.

const http = require('http');
http.createServer()
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
