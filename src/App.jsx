
import { Routes, Route } from 'react-router-dom'
import Users from './components/Users/Users'
import Home from './components/Home/Home'


function App() {

    return (
      <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} /> 
        
      </Routes>
      </>
    ) 
}

export default App
