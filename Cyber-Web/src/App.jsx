import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar"
import Landing from './pages/landing';
import Home from "./pages/Home"
import CIS from "./pages/CIS"

function App() {
  return (
    <>    
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/CIS' element={<CIS/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
