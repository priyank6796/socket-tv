const httpServer = require("http").createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const socketServer = require('socket.io');
const tvEvent = require('./tv/tv.event.route');

const listen = (server) => {
  const io = socketServer.listen(server);
  io.set('transports', ['websocket']);
  tvEvent.InitChatEvent(io);
  return io;
};


listen(httpServer);
httpServer.listen(4443);
console.log('server started');