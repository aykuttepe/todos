import React from 'react'
import { TodoProvider } from '../contexts/ToDoContext'
import Header from '../components/Header'
import Content from '../content'




function TodoList() {
 
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header ></Header>
        <Content></Content>
      </section>
    </TodoProvider>
  )
}

export default TodoList