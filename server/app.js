const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./models');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const io = require('socket.io')(server);
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(cors({
  origin:true,
  credentials:true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  saveUninitialized:false,
  resave:false,
  secret:process.env.COOKIE_SECRET
}))
app.use(cookieParser(process.env.COOKIE_SECRET))

//let room = ['room1', 'room2', 'room3'];
//let a = 0;
// io.on('connection', (socket) => {
//   socket.on('disconnect', () => {});
//   socket.on('message', ({ roomnum, name, message }) => {
//     a = roomnum;
//     io.to(room[a]).emit('receive message', { name, message });
//   });
//   socket.on('messageAll', (socket) => {
//     io.emit('messageAll', { name, message }); //나 자신을 포함한 모두에게 전달
//   });
//   socket.on('joinRoom', (num, name) => {
//     socket.join(room[num], () => {
//       io.to(room[num]).emit('joinRoom', num, name);
//     });
//   });
//   socket.on('leaveRoom', (num, name) => {
//     socket.leave(room[num], () => {
//       io.to(room[num]).emit('leaveRoom', num, name);
//     });
//   });
// });

db.sequelize.sync()
  .then(() => {
    console.log('db접속 성공');
  })
  .catch(console.log('db접속 실패'));

app.use('/user',userRoutes);

app.listen(5000, () =>{
  console.log('서버 실행중')
})
// server.listen(5000, function () {
//   console.log('listening on port 5000');
// });
