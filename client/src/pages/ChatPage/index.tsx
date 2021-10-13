import React, { useEffect, useState } from 'react';
import './style.css';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';

const socket = io('http://localhost:5000');

const ChatPage: React.FC = () => {
  const [state, setState] = useState({ roomnum:0,message: '', name: '' });
  const [chat, setChat] = useState([{name:'', message:''}]);

  useEffect(() => {
    socket.on('receive message', ({ name, message }) => { //서버로부터 메시지 받음
      setChat([...chat, { name, message}]);
    });
  });
  const onTextChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}:<span>{message}</span>
        </h3>
      </div>
    ));
  };

  const onMessageSubmit = (e: any) => {
    e.preventDefault();
    const { roomnum, name, message } = state;
    socket.emit('message', { roomnum, name, message }); //서버로 보낼 이벤트 명, 데이터
    setState({ ...state, message:'' });
  };

  const joinroom = ()=>{
    socket.emit('joinRoom', state.roomnum, state.name);
  }

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="roomnum"
            onChange={(e) => onTextChange(e)}
            value={state.roomnum}
            label="Room number"
          />
        </div>
        <button onClick={joinroom}>입장</button>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>send message</button>
      </form>
      <div className="render-chat">
        <h1>chat log</h1>
        {renderChat()}
      </div>
    </div>
  );
};

export default ChatPage;
