import {cleanup, render, screen} from '@testing-library/react'
import Header from '../../components/Header'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('ヘッダーの初期表示', () => {
    render(<Header />)
    expect(screen.getByText('Todo App')).toBeInTheDocument()
  })
})
