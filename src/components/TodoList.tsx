import React, {useEffect, useState} from 'react'
import {getTodos, Todo} from '../features/TodoApi'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    /* eslint no-unused-expressions: "off" */
    async () => {
      const response = await getTodos()
      setTodos(response)
    }
  }, [])

  return (
    <ul data-testid='TodoList'>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
