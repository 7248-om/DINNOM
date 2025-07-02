import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import React, { useEffect, useState } from 'react'

import Footer from './components/Footer'
function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
  fetch('http://localhost:5000/')
    .then((res) => res.text())
    .then((data) => {
      console.log('Winners:', data);
      setMessage(data);
    });
}, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="text-center text-blue-700 font-bold mt-4">{message}</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
