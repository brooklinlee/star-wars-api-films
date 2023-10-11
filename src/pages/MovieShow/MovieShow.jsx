// npm imports
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// api
import * as filmsService from '../../../services/sw-api'

const MovieShow = (props) => {
  const [movieDetails, setMovieDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await filmsService.show
      setMovieDetails(movieData)
    }
    fetchMovieDetails()
  }, [movieId])

  return (  
    <>
    <h1>Thils is a Movies Details Component</h1>
    </>
  )
}

export default MovieShow