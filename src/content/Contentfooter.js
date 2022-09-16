import React from "react";
import { useToDo } from "../contexts/ToDoContext";

function Contentfooter() {
  const { todos, filter, setFilter, setToDos } = useToDo();

  const clearCompleted = () =>
    setToDos((prev) => prev.filter((todo) => todo.isCompleted === false));

  return (
    <footer className="footer">
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

      <button
        id="clr"
        title="Hide Completed"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Contentfooter;
