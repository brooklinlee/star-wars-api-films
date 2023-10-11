// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// api
// import { index } from "../../../services/sw-api"
// import { show } from "../../../services/sw-api"

import * as filmsService from '../../../services/sw-api'

const MoviesList = () => {
  const [moviesIndex, setMoviesIndex] = useState([])

  useEffect(() => {
    const fetchMoviesIndex = async () => {
      const moviesData = await  filmsService.index()
      // console.log(moviesData)
      setMoviesIndex(moviesData.results)
    }
    fetchMoviesIndex()
  }, [])

  if (!moviesIndex.length) return <h4>Loading Movies...</h4>

  return (  
    <>
    <h1>All Star Wars Movies</h1>
    {/* map over films data to create a card for each */}
    {moviesIndex.map((movie, id) => (
      <div key={id}>
        <Link
          to={`/films/${movie.url.split('/').slice(-2, -1)}`}
        >{movie.title}</Link>
        
      </div>
    ))}
    </>
  )
}

export default MoviesList