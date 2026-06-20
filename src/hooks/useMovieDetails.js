import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMoviesDetails } from '../services/getMovies'

export const useMovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  const movieId = params.movieId || null
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await getMoviesDetails(movieId)
        // console.log(res)

        setMovie(res)
      } catch (error) {
        // console.error('Error custom hook', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [movieId])
  return {
    movie,
    loading,
    error,
  }
}
