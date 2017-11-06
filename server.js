//server/js
var http = require("http");
var toDoList = require("./tasks.js");

http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write("My task for today: " + toDoList.tasks);
response.end();
}).listen(3000);

console.log("It's working!");
