import React, { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import { useToDo } from "./contexts/ToDoContext";

function App() {
  const { theme } = useToDo();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Login></Login>}>
            {" "}
          </Route>
          <Route path="todo" element={<TodoList></TodoList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
