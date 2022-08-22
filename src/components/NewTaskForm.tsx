import {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  width: 100%;
  padding: 2rem;
`

const DivForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: 1.5rem;
`

const DivLabel = styled.div`
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`
const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  color: #374151;
  border-width: 1px;
  border-color: #E5E7EB;
  border-style: solid;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  &:focus {
    outline: 0;
    background-color: #ffffff;
    border-color: #6B7280;
  }
`
const Button = styled.button`
  box-shadow: 0 1px 5px 2px rgb(0 0 0 / 0.1);
  background-color: #4ADE80;
  &:hover {
    background-color: #A7F3D0;
  }
  &:focus {
    outline: 0;
  }
  color: #ffffff;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.25rem;
  border-style: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
`
const NewTaskForm = () => {
  const [taskInput, setTaskInput] = useState('')

  return (
    <Wrapper data-testid="NewTaskForm">
      <DivForm>
        <DivLabel>
          <Label htmlFor="titleInput">Title
            <Input id="titleInput" data-testid="TitleInput" type="text" value={taskInput}
                   onChange={(event) => setTaskInput(event.target.value)}/>
          </Label>
        </DivLabel>
      </DivForm>
        <Button type="button">
          Send
        </Button>
    </Wrapper>
  )
}

export default NewTaskForm