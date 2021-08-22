import React,{useState, useEffect, useRef} from "react"
import {TodoList} from "../../components"

const TodoListPage = () => {
  const [todo, setTodo]=useState([
    {
      id:0,
      text:'first text',
      done:false,
    }
  ]);
  const [add, setAdd] = useState(''); //onchange
  const [inputOpen, setInputOpen]=useState(false);
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const now = new Date();
  const Today = {
    date:now.getFullYear()+'년 '+(now.getMonth()+1)+'월 '+now.getDate()+'일 ',
    week:week[now.getDay()]
  }

  const nextId = useRef(0);
  function AddTodo():void{
    const adding ={
      id:nextId.current,
      text:add,
      done:false
    }
    setTodo(todo.concat(adding));
    setAdd('');
    nextId.current+=1;
    setInputOpen(!inputOpen);
  }

  const checkBtn = (id:number) => {
    setTodo(
      todo.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteBtn = (id:number) =>{
    setTodo(
      todo.filter(item => 
        item.id !== id
      )
    );
  }

  function ControlInput():void{
    setInputOpen(!inputOpen);
  }

  const onChange = (e:any) =>{
    setAdd(e.target.value);
  }

  return (
    <TodoList
      todo={todo}
      checkBtn={checkBtn}
      deleteBtn={deleteBtn}
      AddTodo={AddTodo}
      inputOpen={inputOpen}
      ControlInput={ControlInput}
      onChange={onChange}
      Today={Today}
    />
  );
};

export default TodoListPage;
