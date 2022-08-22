import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Task, Home} from 'styled-icons/material'

const Wrapper = styled.div`
  height: 100vh;
  width: 12rem;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #e5e7eb;
`

const H1 = styled.h1`
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.025rem;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #6b7280;
`

const StyledLink = styled(Link)`
  padding: 1rem;
  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`

const StyledHome = styled(Home)`
  width: 1.25rem;
  margin-right: 0.75rem;
`

const StyledTask = styled(Task)`
  width: 1.25rem;
  margin-right: 0.75rem;
`

const H2 = styled.h2`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`

const Header = () => (
  <Wrapper data-testid="Header">
    <H1>Todo App</H1>
    <Div>
      <StyledLink to="/">
        <H2>
          <StyledHome />
          Home
        </H2>
      </StyledLink>
      <StyledLink to="/newTask">
        <H2>
          <StyledTask />
          New Task
        </H2>
      </StyledLink>
    </Div>
  </Wrapper>
)

export default Header
