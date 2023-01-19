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

const port = process.env.PORT || 4443;

listen(httpServer);
httpServer.listen(port);
console.log('server started');