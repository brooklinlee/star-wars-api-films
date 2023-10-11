// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Landing from './pages/Landing'
import MoviesList from './pages/Movies/MoviesList'
import MovieShow from './pages/MovieShow/MovieShow'

// components
import NavBar from './components/Nav'

// css
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/movies' element={<MoviesList />} />
        <Route path='/movies/:movieId' element={<MovieShow />} />
      </Routes>
    </>
  )
}

export default App
