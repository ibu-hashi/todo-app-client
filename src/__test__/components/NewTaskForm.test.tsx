import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import NewTaskForm from "../../components/NewTaskForm";


describe('NewEntryFormコンポーネント', () => {
  afterEach(() => {
    cleanup()
  })

  it("初期表示", () => {
    render(<NewTaskForm/>)
    expect(screen.queryByLabelText('Title')).toBeTruthy()
    expect(screen.getByTestId("TitleInput")).toHaveValue('')
    expect(screen.queryByText('Send')).toBeTruthy()
  })

  it("タスク名を編集できる", () => {
    render(<NewTaskForm/>)
    fireEvent.change(screen.getByTestId('TitleInput'), {target: {value: 'title text'}})
    expect(screen.getByTestId("TitleInput")).toHaveValue('title text')
  })
})