import React from "react";
import SayHi from "../SayHi";
import NewToDoForm from "./NewToDoForm";


function Header() {
  return (
    <header className="header">
      <SayHi></SayHi>
      <h1>todos</h1>
      <NewToDoForm></NewToDoForm>
    </header>
  );
}

export default Header;
