import React,{useState, useEffect} from "react"
import {TodoList} from "../../components"

const TodoListPage:React.FC = () => {
  const [todo, setTodo]=useState([])
  return (
    <TodoList/>
  );
};

export default TodoListPage;
