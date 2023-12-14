import React from 'react'
import '../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import SearchRes from './Components/SearchRes/SearchRes'
import FooterPlayer from './Components/Footer/FooterPlayer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<SearchRes />} />
        </Routes>
        <FooterPlayer />
      </BrowserRouter>
    </div>
  )
}

export default App