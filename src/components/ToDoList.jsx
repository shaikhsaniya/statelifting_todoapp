import React from "react";

function ToDoList(props) {
  const todos = props.todos;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

export default ToDoList;
