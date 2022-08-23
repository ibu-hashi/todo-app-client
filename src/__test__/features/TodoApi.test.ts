import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {getTodos, postTodos} from '../../features/TodoApi'

describe('TodoApi', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('get /todos', async () => {
    mock.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'title',
        completed: false,
      },
    ])

    const response = await getTodos()

    expect(mock.history.get[0].url).toEqual('/todos')
    expect(response[0].id).toEqual(1)
    expect(response[0].title).toEqual('title')
    expect(response[0].completed).toEqual(false)
  })

  it('post /todos', async () => {
    mock.onPost('/todos', {title: 'title'}).reply(201, {
      id: 1,
      title: 'title',
      completed: false,
    })

    const response = await postTodos('title')

    expect(mock.history.post[0].url).toEqual('/todos')
    expect(mock.history.post[0].data).toEqual(JSON.stringify({title: 'title'}))
    expect(mock.history.post[0].headers?.['Content-Type']).toEqual(
      'application/json'
    )
    expect(mock.history.post[0].headers?.['X-Requested-With']).toEqual(
      'XMLHttpRequest'
    )
    expect(response.id).toEqual(1)
    expect(response.title).toEqual('title')
    expect(response.completed).toEqual(false)
  })
})
