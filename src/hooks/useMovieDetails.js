import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getMovieCredits,
  getMoviesDetails,
  getMovieVideo,
} from '../services/getMovies'

export const useMovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const movieId = params.movieId || null
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cast, setCast] = useState([])
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setMovie([])
        setCast([])
        setTrailerKey(null)

        const [movieData, creditsData, videosData] = await Promise.all([
          getMoviesDetails(movieId),
          getMovieCredits(movieId),
          getMovieVideo(movieId),
        ])
        // console.log(res)

        // console.log({
        //   movieData,
        //   creditsData,
        //   videosData,
        // })

        setMovie(movieData)
        setCast(creditsData)
        const trailer = (videosData || []).find(
          (video) => video.type === 'Trailer' && video?.site === 'YouTube'
        )
        setTrailerKey(trailer ? trailer?.key : null)

        //setMovie(res)
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
    cast,
    trailerKey,
    loading,
    error,
  }
}
