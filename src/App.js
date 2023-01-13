import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
