import React, { useEffect, useState } from 'react';
import './style.css';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import { setConstantValue } from 'typescript';

const socket = io('http://localhost:5000');

const ChatPage: React.FC = () => {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([{name:'', message:''}]);

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, {name, message}]);
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
    const { name, message } = state;
    socket.emit('message', { name, message });
    setState({ message: '', name });
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
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
