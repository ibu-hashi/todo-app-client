import {cleanup, render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import NewTask from '../../pages/NewTask'

describe('タスク作成画面', () => {
  afterEach(() => {
    cleanup()
  })

  it('画面構成', async () => {
    render(<NewTask />, {wrapper: BrowserRouter})

    expect(screen.queryByTestId('Header')).toBeTruthy()
    expect(screen.queryByTestId('NewTaskForm')).toBeInTheDocument()
  })
})
