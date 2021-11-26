import React from "react";
//import ToDoPage from "../ToDo";
import ToDoPage from "../ToDo/ToDoPage";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

function HomePage(props) {
  
 

 
       
  return(
    <React.Fragment> 
       <h1>Todo App</h1>
      <ToDoPage tasks={DATA}/>
    </React.Fragment>  
   
  );
}

export default HomePage;
