import ToDoCount from "./components/ToDoCount";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { useState } from "react";


function App() {
  const [todos,setTodos]=useState(["item 1", "item 2", "item 3"])
  return (
    <div className="App">
      <ToDoCount todos={todos}/>
      <ToDoList todos={todos}/>
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

export default App;
