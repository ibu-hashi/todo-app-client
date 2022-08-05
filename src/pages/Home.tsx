import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import TodoList from '../components/TodoList'
import Header from '../components/Header'
import {getTodos, Todo} from '../features/TodoApi'
import {TodoContext} from '../context/todoContext'

const Div = styled.div`
  display: flex;
`
const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res)
    })
  }, [])

  return (
    <Div>
      <Header />
      <TodoContext.Provider value={todos}>
        <TodoList />
      </TodoContext.Provider>
    </Div>
  )
}

export default Home
