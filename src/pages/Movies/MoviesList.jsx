// npm modules
import { useState, useEffect } from "react"

// api
import { index } from "../../../services/sw-api"

const MoviesList = () => {
  const [moviesIndex, setMoviesIndex] = useState([])

  useEffect(() => {
    const fetchMoviesIndex = async () => {
      const index = await getMoviesList()
    }
    fetchMoviesIndex()
  }, [])



  return (  
    <>
    <h1>This is a Movies Index Component</h1>
    {/* map over films data to create a card for each */}
    </>
  )
}

export default MoviesList