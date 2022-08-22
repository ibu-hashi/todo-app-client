import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NewTask from './pages/NewTask'

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newTask" element={<NewTask />} />
    </Routes>
  </div>
)

export default App