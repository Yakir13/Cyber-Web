import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import CIS from "./pages/CIS"

function App() {
  return (
    <>    
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/CIS' element={<CIS/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
