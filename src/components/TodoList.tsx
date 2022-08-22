import React from 'react'
import {TodoContext} from '../context/TodoContext'

const TodoList = () => {
  const todoContext = React.useContext(TodoContext)

  return (
    <ul data-testid="TodoList">
      {todoContext?.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
