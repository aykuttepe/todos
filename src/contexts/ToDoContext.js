import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setToDos] = useState([]);
  const [text, setText] = useState({id:-1,content:""});

  useEffect(() => {
    axios
      .get(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos`)
      .then((response) => {
        setToDos(response.data);
      });
  }, []);

  const addToDo =async (content) => {
   await axios
      .post(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos`, {
        content,
        isCompleted: false,
      })
      .then(() => getData());
  };
  const toggleToDo = (id) => {
    const cloned_todos = [...todos];

    const _item = cloned_todos.find((itm) => itm.id === id);
    _item.isCompleted = !_item.isCompleted;

    axios.put(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${id}`, {
      isCompleted: _item.isCompleted,
    });
    setToDos(cloned_todos);
  };
  const updateToDo = (content) => {
    const cloned_todos = [...todos];
    if (text.id!==-1) {
      const _item = cloned_todos.find((itm) => itm.id === text.id);
      _item.content = content;
      axios.put(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${text.id}`, {
      content: _item.content,
    }).then(setText({id:-1,content:""}));
      
    }
    setToDos(cloned_todos);
  };
  const destroyToDo = (id) => {
    const cloned_todos = [...todos];
    const itemIndex = cloned_todos.findIndex((itm) => itm.id === id);
    try {
      if (itemIndex + 1) {
        axios
          .delete(`https://631c9d9f1b470e0e12066b8a.mockapi.io/todos/${id}`)
          .then(() => getData());
      }
    } catch (error) {
      throw new Error(error);
    }

    setToDos(cloned_todos);
  };

  const getData = () => {
    axios
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
