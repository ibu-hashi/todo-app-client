import {Route, Routes} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import Home from './pages/Home'
import NewTask from './pages/NewTask'
import {TodoContext} from './context/TodoContext'
import {getTodos} from './features/TodoApi'

const App = () => {
  const todoContext = useContext(TodoContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos()
      todoContext?.setTodos(response)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newTask" element={<NewTask />} />
      </Routes>
    </div>
  )
}

export default App
