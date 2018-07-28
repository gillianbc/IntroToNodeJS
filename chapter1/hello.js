//There must be an easier way fr subdirectories to all use the same .env
require('dotenv').config({path: 'C:/dev/gillian/nodeintro/.env'})


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
console.log('Server running on ' + process.env.IP + ':' + process.env.PORT);