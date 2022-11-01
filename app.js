const http = require("http");

const routes = require('./routes');

const port = 8080;
console.log(routes.someText)
const server = http.createServer(routes.hanlder);

server.listen(port);
