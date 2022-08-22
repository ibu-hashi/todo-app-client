import React, {createContext, useMemo, useState} from 'react'
import {Todo} from '../features/TodoApi'

type Props = {
  children: React.ReactNode
}

type InitialState = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext<InitialState | null>(null)

const TodoProvider: React.FC<Props> = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todosValue = useMemo(() => ({todos, setTodos}), [todos, setTodos])
  return (
    <TodoContext.Provider value={todosValue}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider
