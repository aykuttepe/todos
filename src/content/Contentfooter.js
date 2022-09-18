import React from "react";
import { useToDo } from "../contexts/ToDoContext";

function Contentfooter() {
  const { todos, filter, setFilter, theme } = useToDo();

  return (
    <footer className={`footer ${theme}`}>
      <span className="todo-count">
        <strong>{todos.length} </strong>
        {todos.length > 1 ? "items" : "item"} left
      </span>

      <ul className="filters">
        <li>
          <a
            id="all"
            href="#/"
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? "selected" : ""}`}
          >
            All
          </a>
        </li>
        <li>
          <a
            id="active"
            href="#/"
            onClick={() => setFilter("active")}
            className={`${filter === "active" ? "selected" : ""}`}
          >
            Active
          </a>
        </li>
        <li>
          <a
            id="comp"
            href="#/"
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? "selected" : ""}`}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contentfooter;
