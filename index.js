const httpServer = require("http").createServer();
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