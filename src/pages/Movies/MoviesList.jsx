// npm modules
import { useState, useEffect } from "react"

// api
import { index } from "../../../services/sw-api"

const MoviesList = () => {
  const [moviesIndex, setMoviesIndex] = useState([])

  useEffect(() => {
    const fetchMoviesIndex = async () => {
      const moviesData = await index()
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
        {movie.title}
      </div>
    ))}
    </>
  )
}

export default MoviesList