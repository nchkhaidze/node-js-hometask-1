const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(`You sent the following request: ${request.method}\n`);
  response.write(`Request url is: ${request.url}\n`);
  if (request.headers["whatwillsavetheworld"]) {
    response.write(`Request has a header - WhatWillSaveTheWorld: ${request.headers["whatwillsavetheworld"]}`);
  }
  response.end();
}).listen(8080, console.log("Server listening at port 8080"));