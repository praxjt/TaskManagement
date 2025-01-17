import { useState,useEffect } from "react";
import "./input.css"
import './todolist.css'
import TodoList from "./TodoList";

export default function Input() {

    const [text, setText] = useState("");
    const [todoList, settodolist] = useState([]);




const InputText = (e) => {

 
    setText(e.target.value)
   
}

const AddTask = () => {

    if(text!==""){
const newtask={
    namee:text,
    id:Date.now(),
    completed:false
}
    
settodolist([newtask,...todoList])
localStorage.setItem("todoList",JSON.stringify([newtask,...todoList]))

    setText("")
}
}

const deleteTask=(id)=>{
let del= todoList.filter((task) => {return task.id!== id});

settodolist(del)
localStorage.setItem("todoList",JSON.stringify(del))

}


const CompletedTask=(todo)=>{
    
    console.log(todo)
    let updatedList= todoList.map((task) => {
        if(task.id===todo)
        return{ ...task, completed:!task.completed }
    else{
            
        return task
}
})


   let completedtask = updatedList.filter((todo)=>{ return todo.completed})
   let pendingtask = updatedList.filter((todo)=>{ return !todo.completed})
   localStorage.setItem("todoList",JSON.stringify([...pendingtask,...completedtask]))

return settodolist([...pendingtask,...completedtask])
   
}

useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    settodolist(savedTodoList);
}, []);


  return (
    <div>
        <div className="inputContainer">
    
     <input placeholder="add task..." value={text} onChange={InputText} type="text" />

     <div className="AddTask" onClick={AddTask}>Add task</div>

  

     </div>
      {
     todoList.map((todo)=>{
     return (
      <TodoList key={todo.id} namee={todo.namee}  completed={todo.completed} id={todo.id} CompletedTask={CompletedTask} deleteTask={deleteTask} />
     )
     })}
   
    </div>
  );
}