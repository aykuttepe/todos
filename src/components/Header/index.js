import React from "react";
import SayHi from "../SayHi";
import NewToDoForm from "./NewToDoForm";
import { useToDo } from "../../contexts/ToDoContext";

function Header() {
  const { toggleTheme } = useToDo();

  return (
    <header className="header">
      <button onClick={toggleTheme} className="darkbutton">
        Change Theme
      </button>

      <SayHi></SayHi>
      <h1>todos</h1>
      <NewToDoForm></NewToDoForm>
    </header>
  );
}

export default Header;
