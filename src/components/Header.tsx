import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Task, Home} from 'styled-icons/material'

const DivHeader = styled.div`
  height: 100vh;
  width: 12rem;
  border-right-width: 1px;
  background-color: white;
  border-right-style: solid;
  border-right-color: #e5e7eb;
`

const Title = styled.h1`
  font-weight: 600;
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.025em;
`

const DivContent = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #6b7280;
`

const LinkHeader = styled(Link)`
  padding: 1rem;
  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`

const IconHome = styled(Home)`
  width: 1.25rem;
  margin-right: 0.75rem;
`

const IconTask = styled(Task)`
  width: 1.25rem;
  margin-right: 0.75rem;
`

const LinkText = styled.h2`
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
`

const SpanLink = styled.span`
  &:hover {
    color: black;
  }
`

const Header = () => (
  <DivHeader data-testid="Header">
    <Title>Todo App</Title>
    <DivContent>
      <LinkHeader to="/">
        <LinkText>
          <IconHome />
          <SpanLink>Home</SpanLink>
        </LinkText>
      </LinkHeader>
      <LinkHeader to="/newTask">
        <LinkText>
          <IconTask />
          <SpanLink>New Task</SpanLink>
        </LinkText>
      </LinkHeader>
    </DivContent>
  </DivHeader>
)

export default Header
