import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import CIS from "./pages/CIS"
import DoS_DDoS from './pages/DoS_DDoS';
import Malware from './pages/Malware';

function App() {
  return (
    <>    
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/CIS' element={<CIS/>} />
      <Route path='/Dos_DDoS' element={<DoS_DDoS/>} />
      <Route path='/Malware' element={<Malware/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
