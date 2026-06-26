import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getMovieCollection,
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
  const [collection, setCollection] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setMovie([])
        setCast([])
        setTrailerKey(null)
        setCollection([])

        const [movieData, creditsData, videosData] = await Promise.all([
          getMoviesDetails(movieId),
          getMovieCredits(movieId),
          getMovieVideo(movieId),
        ])
        // console.log(movieData)

        if (movieData?.belongs_to_collection !== null) {
          const resCollection = await getMovieCollection(
            movieData.belongs_to_collection.id
          )
          const parts = resCollection?.parts.find(
            (part) => part.id !== movieData.id
          )
          setCollection(parts)
        }

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
    collection,
    cast,
    trailerKey,
    loading,
    error,
  }
}
