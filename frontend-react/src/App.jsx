import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/login' element={<Login />} />
      </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
