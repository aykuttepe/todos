import React from "react";

import { useToDo } from "../../contexts/ToDoContext";
import Item from "./Item";

function List() {
  const { todos, filter } = useToDo();

  let filtered = null;

  switch (filter) {
    case "all":
      filtered = todos;
      break;
    case "active":
      filtered = todos.filter((todo) => todo.isCompleted === false);
      break;
    case "completed":
      filtered = todos.filter((todo) => todo.isCompleted === true);
      break;
    default:
      console.log("switch te hata olabilir!!!!");
      throw new Error("switch te hata olabilir");
      
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo}></Item>
      ))}
      
    </ul>
  );
}

export default List;
