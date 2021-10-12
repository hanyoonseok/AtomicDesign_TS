const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});
let loginId = {};

io.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message });
  });
});


server.listen(5000, function () {
  console.log('listening on port 5000');
});
