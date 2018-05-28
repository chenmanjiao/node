var http = require('http')
http.createServer(function(require, response){
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end('Hello world!\n')
}).listen(8080)

console.log('Server running at http://127.0.0.1:8080')