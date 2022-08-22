import React, {useContext, useEffect} from 'react'
import TodoList from '../components/TodoList'
import Header from '../components/Header'
import {getTodos} from '../features/TodoApi'
import {TodoContext} from '../context/TodoContext'

const Home = () => {
  const todoContext = useContext(TodoContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos()
      todoContext?.setTodos(response)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <TodoList />
    </div>
  )
}

export default Home
