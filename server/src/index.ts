import express from "express";
import socketIO from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const message = "Server running on localhost:3000";

app.get("/", (req, res) => {
  res.send(message);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log(message);
});
