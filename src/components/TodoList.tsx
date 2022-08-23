import React from 'react'
import styled from 'styled-components'
import {TodoContext} from '../context/TodoContext'

const Ul = styled.ul`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`

const Div =styled.div`
  width: 100%;
  display: flex;
  border-width: 2px;
  border-style: solid;
  border-color: #E5E7EB;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 5px 2px rgb(0 0 0 / 0.1);
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
`

const Input = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  color: #4B5563;
`
const P = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`
const TodoList = () => {
  const todoContext = React.useContext(TodoContext)
  return (
    <Ul data-testid="TodoList">
      {todoContext?.todos.map((todo) => (
        <Li key={todo.id}>
          <Div>
            <Label>
              <Input type="checkbox" defaultChecked={todo.completed}/>
            </Label>
            <P>{todo.title}</P>
          </Div>
        </Li>
      ))}
    </Ul>
  )
}

export default TodoList