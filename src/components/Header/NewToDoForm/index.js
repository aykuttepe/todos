import React, { useState } from "react";
import { useToDo } from "../../../contexts/ToDoContext";

function NewToDoForm() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({ content: "" });
  const { addToDo, text, setText, updateToDo } = useToDo();

  const handleChange = (event) => {
    let sizes = event.target.value.length;
    event.preventDefault();
    setForm({
      [event.target.name]:
        event.target.value === "" ? text.content : event.target.value,
    });
    sizes < 3 ? setShow(true) : setShow(false);
  };

  const onSubmit = () => {
    if (text.id!==-1) {
      console.log("updated");
      updateToDo(form.content);
    } else {
      console.log("added");
      addToDo(form.content);
    }
    form.content="";
  };

  return (
    <form onSubmit={!show ? onSubmit : null}>
      <input
        title="must be a minimum of 3 characters"
        autoFocus
        id="content"
        type={"text"}
        name="content"
        placeholder="What needs to be done?"
        className="new-todo"
        onChange={handleChange}
        value={form.content === "" ? text.content : form.content}
      ></input>
      {show ? <b className="error">Must be a minimum of 3 characters</b> : null}
    </form>
  );
}

export default NewToDoForm;
