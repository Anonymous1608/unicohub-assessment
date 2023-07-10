import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Users from './components/Users/Users'
import Hero from './components/Hero'

function App() {

    return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/users' element={<Users />} /> 
        
      </Routes>
      </>
    ) 
}

export default App
