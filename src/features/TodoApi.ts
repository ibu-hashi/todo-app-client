import axios from 'axios'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const getTodos = async () => {
  const response = await axios.get<Todo[]>('/todos')
  // const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  return response.data
}
