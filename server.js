// server.js
// where our node app starts

// we've started you off with Express (https://expressjs.com/)
const express = require("express");
const app = express();

//below I have madee all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// until here are the basic node and express app working

const log = console.log;
// initialize http server, socket.io and port number
const http = require("http").createServer();
const io = require("socket.io")(http);
const port = 3000;
http.listen(port, () => log(`server listening on port: ${port}`));
io.on("connection", socket => {
  log("connected");
  socket.on("message", evt => {
    log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", evt => {
  log("some people left");
});

// I have set up a connection event, the function callback has a socket argument.
//The socket registers a message event, it has a handler function that broadcast the data event passed to it to all other sockets connected
//to the server when the message event is fired.

// As all users have a message event they are listening to, the message handler will be executed because the server emitted a message event,
//so all user’s textarea will be set with the text passed over the socket connection.
