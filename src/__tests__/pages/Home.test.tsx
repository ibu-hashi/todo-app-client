import {cleanup, render, screen, waitFor} from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'

describe('Home画面', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
    cleanup()
  })

  it('画面構成', async () => {
    mock.onGet('/todos').reply(200, [])

    render(<Home />, {wrapper: BrowserRouter})

    await waitFor(() => expect(screen.queryByTestId('Header')).toBeTruthy())
    await waitFor(() => expect(screen.queryByTestId('TodoList')).toBeTruthy())
  })

  it('ホーム画面の初期表示', async () => {
    mock.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'title',
        completed: false,
      },
    ])
    render(<Home />, {wrapper: BrowserRouter})

    await waitFor(() => expect(mock.history.get[0].url).toEqual('/todos'))
    await waitFor(() => expect(screen.getByText('title')).toBeInTheDocument())
  })
})
