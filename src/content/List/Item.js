import React from "react";
import { useToDo } from "../../contexts/ToDoContext";

function Item({ todo }) {
  const { toggleToDo, destroyToDo, setText } = useToDo();

  const onChange = (id) => {
    toggleToDo(id);
  };

  const getContent = (content, id) => {
    setText({ id: id, content: content });
  };

  const onDestroy = (id) => destroyToDo(id);

  return (
    <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          title="Is Completed"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onChange(todo.id)}
        />
        <label
          title="Click to Update"
          onClick={() => getContent(todo.content, todo.id)}
        >
          {todo.content}
        </label>
        <button
          title="Click to Delete"
          className="destroy"
          onClick={() => onDestroy(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default Item;
