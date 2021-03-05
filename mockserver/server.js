var http = require('http');
var mockServer = require('mockserver');

http.createServer(mockServer('mockfiles')).listen(9001);
