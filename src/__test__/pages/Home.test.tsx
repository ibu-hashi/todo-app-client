import {cleanup, render, screen, waitFor} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'

describe('Home画面', () => {

  afterEach(() => {
    cleanup()
  })

  it('画面構成', async () => {
    render(<Home />, {wrapper: BrowserRouter})

    await waitFor(() => expect(screen.queryByTestId('Header')).toBeTruthy())
    await waitFor(() => expect(screen.queryByTestId('TodoList')).toBeTruthy())
  })
})
