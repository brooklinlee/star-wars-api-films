// npm imports
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// api
import * as filmsService from '../../../services/sw-api'

const MovieShow = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await filmsService.show(movieId)
      setMovieDetails(movieData)
    }
    fetchMovieDetails()
  }, [movieId])

  if (!movieDetails.title) return <h4>Looking in a galaxy far, far away...</h4>

  return (  
    <>
    <h1>{movieDetails.title}</h1>
    <h2>Episode {movieDetails.episode_id}</h2>

    </>
  )
}

export default MovieShow