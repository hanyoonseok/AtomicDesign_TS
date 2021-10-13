const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

let room = ['room1', 'room2', 'room3'];
let a=0;
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('disconnecteed');
  });
  socket.on('message', ({ roomnum, name, message }) => {
    //io.emit('message', { name, message }); //나 자신을 포함한 모두에게 전달
    a = roomnum;
    io.to(room[a]).emit('receive message', {name, message});
  });
  socket.on('joinRoom', (num, name)=>{
    socket.join(room[num], () =>{
      io.to(room[num]).emit('joinRoom', num, name);
    })
  })
  socket.on('leaveRoom', (num, name)=>{
    socket.leave(room[num], () =>{
      io.to(room[num]).emit('leaveRoom', num, name);
    })
  })
});

server.listen(5000, function () {
  console.log('listening on port 5000');
});
