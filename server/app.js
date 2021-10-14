const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./models');
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let room = ['room1', 'room2', 'room3'];
let a = 0;
io.on('connection', (socket) => {
  socket.on('disconnect', () => {});
  socket.on('message', ({ roomnum, name, message }) => {
    a = roomnum;
    io.to(room[a]).emit('receive message', { name, message });
  });
  socket.on('messageAll', (socket) => {
    io.emit('messageAll', { name, message }); //나 자신을 포함한 모두에게 전달
  });
  socket.on('joinRoom', (num, name) => {
    socket.join(room[num], () => {
      io.to(room[num]).emit('joinRoom', num, name);
    });
  });
  socket.on('leaveRoom', (num, name) => {
    socket.leave(room[num], () => {
      io.to(room[num]).emit('leaveRoom', num, name);
    });
  });
});

db.sequelize.sync()
  .then(() => {
    console.log('db접속 성공');
  })
  .catch(console.log('db접속 실패'));

app.use('/user',userRoutes);

server.listen(5000, function () {
  console.log('listening on port 5000');
});
