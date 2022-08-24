var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain

   // for both request and response
   // header and body
   response.writeHead(200, {'Content-Type': 'text/plain','xyz':'sf','cookie1':'sf'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');