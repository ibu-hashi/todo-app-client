import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import NewTaskForm from '../../components/NewTaskForm'

describe('NewEntryFormコンポーネント', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
    cleanup()
  })

  it('初期表示', () => {
    render(<NewTaskForm />)
    expect(screen.queryByLabelText('Title')).toBeTruthy()
    expect(screen.getByTestId('TitleInput')).toHaveValue('')
    expect(screen.queryByText('Send')).toBeTruthy()
  })

  it('タスク名を編集できる', () => {
    render(<NewTaskForm />)
    fireEvent.change(screen.getByTestId('TitleInput'), {
      target: {value: 'title text'},
    })
    expect(screen.getByTestId('TitleInput')).toHaveValue('title text')
  })

  it('作成ボタンを押したら、作成がリクエストされる', () => {
    render(<NewTaskForm />)
    fireEvent.change(screen.getByTestId('TitleInput'), {
      target: {value: 'title text'},
    })
    fireEvent.click(screen.getByText('Send'))
    expect(mock.history.post[0].url).toEqual('/todos')
    expect(mock.history.post[0].data).toEqual(
      JSON.stringify({title: 'title text'})
    )
  })
})
