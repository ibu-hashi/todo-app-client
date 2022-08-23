import React from 'react'
import styled from 'styled-components'
import TodoList from '../components/TodoList'
import Header from '../components/Header'

const Div = styled.div`
  display: flex;
`

const Home = () => (
  <Div>
    <Header />
    <TodoList />
  </Div>
)

export default Home
