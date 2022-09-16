import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Login></Login>}> </Route>
        <Route path="todo" element={<TodoList ></TodoList>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
