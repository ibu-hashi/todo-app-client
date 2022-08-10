// TodoList.test.tsx
import {render, screen, waitFor} from '@testing-library/react'
import TodoList from '../../components/TodoList'
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe('TodoList.tsx Component', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('getTodosの戻り値が空ならリストも空', () => {
    mock.onGet('/todos').reply(200, [])

    render(<TodoList />)

    expect(screen.getByRole('list').hasChildNodes()).toEqual(false)
  })

  it('getTodosの戻り値があればリストアイテムを表示', async () => {
    mock.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'title',
        completed: false,
      },
    ])

    await waitFor(()=>render(<TodoList />))

    await waitFor(()=>expect(screen.getByRole('list').hasChildNodes()).toEqual(true))

    await waitFor(() => expect(screen.getByRole('listitem').textContent).toEqual('title'))
  })
})