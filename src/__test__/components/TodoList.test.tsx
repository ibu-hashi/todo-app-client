import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import TodoList from '../../components/TodoList'

describe('TodoList.tsx Component', () => {
  let todoContextMock: jest.Mock

  beforeEach(() => {
    todoContextMock = React.useContext = jest.fn()
  })

  it('todoContextが空ならリストも空', () => {
    todoContextMock.mockReturnValue({
      todos: [],
    })

    render(<TodoList />)

    expect(screen.getByRole('list').hasChildNodes()).toEqual(false)
  })

  it('todoContextがあればリストアイテムを表示', async () => {
    todoContextMock.mockReturnValue({
      todos: [
        {
          id: 1,
          title: 'title',
          completed: false,
        },
      ],
    })

    render(<TodoList />)

    expect(screen.getByRole('list').hasChildNodes()).toEqual(true)

    await waitFor(() =>
      expect(screen.getByRole('listitem').textContent).toEqual('title')
    )
  })
})
