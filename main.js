var http = require('http');

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello you updated version now! \n");
});

server.listen(8000);
console.log("Backend started on port 8000")