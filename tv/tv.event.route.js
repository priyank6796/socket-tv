
const handleTvEvent = (io, socket, tvId, next) => {
  socket.on('admin/play_to_tv', (data) => {
    if(data.id) {
      io.sockets.in(data.id).emit('play', {url: data.url});
    } else {
      io.emit('play', {url: data.url });
    }
  });
};

const userConnected = (socket, io, next) => {
  // chatController.connect(io, socket, next);
};

module.exports.InitChatEvent = (io) => {

  io.on('connection', (socket, next) => {
    console.info('New user connected');
    const { tvId } = socket.handshake.query;
    if(tvId) socket.join(tvId);
    handleTvEvent(io, socket, tvId, next);
  });
};
