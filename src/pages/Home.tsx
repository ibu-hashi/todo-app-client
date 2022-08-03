import React, {useEffect, useState} from "react";
import TodoList from '../components/TodoList'
import Header from '../components/Header'
import {getTodos, Todo} from "../features/TodoApi";

export const TodoContext = React.createContext<Todo[]>([])

const Home = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getTodos().then((res) => {
            setTodos(res)
        })
    }, [])

    return(
        <div>
            <Header />
            <TodoContext.Provider value={todos}>
                <TodoList />
            </TodoContext.Provider>
        </div>
    )
}

export default Home
