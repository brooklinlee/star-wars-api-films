// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Landing from './pages/Landing'
import MoviesList from './pages/Movies/MoviesList'

// components
import NavBar from './components/Nav'

// css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/movies' element={<MoviesList />}></Route>
      </Routes>
    </>
  )
}

export default App
