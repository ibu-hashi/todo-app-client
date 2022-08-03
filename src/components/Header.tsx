import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: #10b981;
  padding: 1.5rem;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #ffffff;
  letter-spacing: -0.025em;
`

const Header = () => (
  <Div data-testid="Header">
    <Title>Todo App</Title>
  </Div>
)

export default Header
