import React from 'react'
import {TodoContext} from '../context/todoContext'

const TodoList = () => {
  const todos = React.useContext(TodoContext)

  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
