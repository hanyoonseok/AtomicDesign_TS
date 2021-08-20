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
  const [modalOpen, setModalOpen]=useState(false)

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
    setModalOpen(!modalOpen);
  }

  function OpenModal():void{
    setModalOpen(true);
  }

  const onChange = (e:any) =>{
    setAdd(e.target.value);
  }

  return (
    <TodoList
      todo={todo}
      AddTodo={AddTodo}
      todonum={todonum}
      modalOpen={modalOpen}
      OpenModal={OpenModal}
      onChange={onChange}
    />
  );
};

export default TodoListPage;
