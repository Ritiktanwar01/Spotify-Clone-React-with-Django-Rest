import React from 'react'
import '../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import SearchRes from './Components/SearchRes/SearchRes'
import PlayListDetailPage from './Components/PlayListDetails/PlayListDetailPage'

function App() {
  return (
    // <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<SearchRes />} />
          <Route path='playlist' element={<PlayListDetailPage />} />
        </Routes>
      </BrowserRouter>
    // </div>
  )
}

export default App