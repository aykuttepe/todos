import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ToDoContext = createContext();
const defaultTheme = localStorage.getItem("theme") || "light";

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setToDos] = useState([]);
  const [text, setText] = useState({ id: -1, content: "" });
  const cloned_todos = [...todos];
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    axios
      .get(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos`)
      .then((response) => {
        setToDos(response.data);
      });
  }, []);

  const toggleTheme = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };

  const addToDo = (content) => {
    axios.post(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos`, {
      content: content.trim(),
      isCompleted: false,
    });
    getData();
  };
  const toggleToDo = (id) => {
    const itemIndex = cloned_todos.findIndex((itm) => itm.id === id);
    if (itemIndex + 1) {
      cloned_todos[itemIndex].isCompleted =
        !cloned_todos[itemIndex].isCompleted;
      axios.put(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${id}`, {
        isCompleted: cloned_todos[itemIndex].isCompleted,
      });
      setToDos(cloned_todos);
    }
  };
  const updateToDo = (content) => {
    if (text.id !== -1) {
      const _item = cloned_todos.find((itm) => itm.id === text.id);
      _item.content = content.trim();
      axios
        .put(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${text.id}`, {
          content: _item.content,
        })
        .then(setText({ id: -1, content: "" }));
    }
    setToDos(cloned_todos);
  };
  const destroyToDo = (id) => {
    const itemIndex = cloned_todos.findIndex((itm) => itm.id === id);
    cloned_todos.splice(itemIndex, 1);

    try {
      axios.delete(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${id}`);
    } catch (error) {
      throw new Error(error, "Delete Errors");
    }
    setToDos(cloned_todos);
  };

  const getData = async () => {
    await axios
      .get(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos`)
      .then((response) => {
        setToDos(response.data);
      });
  };

  const values = {
    todos,
    text,
    setText,
    setToDos,
    addToDo,
    updateToDo,
    toggleToDo,
    destroyToDo,
    filter,
    setFilter,
    theme,
    toggleTheme,
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useToDo hook must be call inside ToDoProvider component");
  }
  return context;
};
