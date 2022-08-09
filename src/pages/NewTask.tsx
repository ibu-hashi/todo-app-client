import styled from 'styled-components'
import Header from '../components/Header'
import NewTaskForm from '../components/NewTaskForm'

const Div = styled.div`
  display: flex;
`

const NewTask = () => (
  <Div data-testid="NewTask" className="flex">
    <Header />
    <NewTaskForm />
  </Div>
)

export default NewTask
