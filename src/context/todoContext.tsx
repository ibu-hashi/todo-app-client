import React from 'react'
import {Todo} from '../features/TodoApi'

export const TodoContext = React.createContext<Todo[]>([])
