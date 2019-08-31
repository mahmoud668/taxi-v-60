const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("taxiRequest", routeResponse => {
    console.log(routeResponse);
   
  });
});

server.listen(port,"0.0.0.0", () => console.log("server running on port:" + port));