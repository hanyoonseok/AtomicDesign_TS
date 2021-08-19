import React,{useState, useEffect} from "react"
import {TodoList} from "../../components"

const TodoListPage:React.FC = () => {
  const [todo, setTodo]=useState(['asdsdaf','ddd'])

  useEffect(()=>{

  },[todo])
  
  return (
    <TodoList
      todo={todo}
      setTodo={setTodo}
    />
  );
};

export default TodoListPage;
