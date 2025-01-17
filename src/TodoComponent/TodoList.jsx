export default function TodoList({namee,id,completed,CompletedTask,deleteTask}){

return(
    <div className="todoListContainer" >
    <span className="tasks" style={completed? {color:"black"}:{}}>{namee}</span>
    <div className="btnContainer">
    <button  className="btn" onClick={()=>{deleteTask(id)}}>X</button>
    <button className="btn" onClick={()=>{CompletedTask(id)}}>
      <i className="fa-solid fa-check"></i>
      </button>
    </div>
  </div>

)}