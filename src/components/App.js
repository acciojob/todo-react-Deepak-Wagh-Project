
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [Todo,setTodo]=useState("");
  const[TodoList,setTodoList]=useState([]);
  function addToDoList(){
   let list =[...TodoList,Todo];
   setTodoList(list);
  }
  function deleteItemFromList(item){
    let list =TodoList.filter((ele)=>{
      return ele!=item;
    })
    setTodoList(list);

  }
  function getKey(){
       const timeStamp=new Date().getTime();
       const stringTimeStamp=timeStamp.toString();
       return "item_"+stringTimeStamp+"_"+Math.random()*100;
  }
  return (
    <div>
       <div>To-Do List</div>
       <div><input type="text" onChange={(e)=>setTodo(e.target.value)}/>
       <button onClick={addToDoList}>Add Todo</button></div>
       <ul className="to-do-list-container">
       {
        TodoList.map((ele)=>{
          return(<li className="to-do-container" key={getKey()}> 
            <div>{ele}</div>
            <button  onClick={()=>deleteItemFromList(ele)}>Delete</button>
          </li>)
        })
       }
       </ul>
    </div>
  )
}

export default App
