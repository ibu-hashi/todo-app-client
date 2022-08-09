import MockAdapter from 'axios-mock-adapter'
import axios, {AxiosRequestHeaders} from 'axios'
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
        completed: false
      }
    ])

    const response = await getTodos()

    expect(mock.history.get[0].url).toEqual('/todos')
    expect(response[0].id).toEqual(1)
    expect(response[0].title).toEqual('title')
    expect(response[0].completed).toEqual(false)
  })

  it('post /todo', async () => {
    mock.onPost('/todos', {title: 'title'}).reply(201, {
      id: 1,
      title: 'title',
      completed: false
    })

    const response = await postTodos('title')

    expect(mock.history.post[0].url).toBe('/todos')
    expect(mock.history.post[0].data).toBe(JSON.stringify({title: 'title'}))
    expect((mock.history.post[0].headers as AxiosRequestHeaders)['Content-Type']).toEqual('application/json')
    expect((mock.history.post[0].headers as AxiosRequestHeaders)['X-Requested-With']).toBe('XMLHttpRequest')
    expect(response.id).toBe(1)
    expect(response.title).toBe('title')
    expect(response.completed).toBeFalsy()
  })
})
