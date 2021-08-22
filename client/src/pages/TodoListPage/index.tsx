import React,{useState, useEffect, useRef} from "react"
import {TodoList} from "../../components"

const TodoListPage = () => {
  const [todo, setTodo]=useState([
    {
      id:0,
      text:'first text'
    }
  ]);
  const [add, setAdd] = useState(''); //onchange
  const [todonum, setTodonum]=useState(0);
  const [inputOpen, setInputOpen]=useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [today, setToday]=useState({
    date:'',
    week:'',
  });
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  useEffect(()=>{
    const now = new Date();
    const Today = {
      date:now.getFullYear()+'년 '+(now.getMonth()+1)+'월 '+now.getDate()+'일 ',
      week:week[now.getDay()]
    }
    setToday(Today);
  })
  useEffect(()=>{
    setTodonum(todo.length);
  },[todo])

  const nextId = useRef(1);
  function AddTodo():void{
    const adding ={
      id:nextId.current,
      text:add,
    }
    setTodo(todo.concat(adding));
    setAdd('');
    nextId.current+=1;
    setInputOpen(!inputOpen);
  }

  function ControlInput():void{
    setInputOpen(!inputOpen);
  }

  function checkBtn():void {
    setIsCheck(!isCheck);
  }

  const onChange = (e:any) =>{
    setAdd(e.target.value);
  }

  return (
    <TodoList
      todo={todo}
      AddTodo={AddTodo}
      todonum={todonum}
      inputOpen={inputOpen}
      ControlInput={ControlInput}
      onChange={onChange}
      today={today}
      isCheck={isCheck}
      setIsCheck={setIsCheck}
      checkBtn={checkBtn}
    />
  );
};

export default TodoListPage;
