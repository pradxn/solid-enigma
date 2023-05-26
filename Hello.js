// Create a simple HTTP server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create the server and define the request handler function
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

