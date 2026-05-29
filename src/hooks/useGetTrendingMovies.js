import { useEffect } from 'react'
import { useState } from 'react'
import { getTrendingMovies } from '../services/getMovies'

export const useGetTrendingMovies = () => {
  const [moviesDay, setMoviesDay] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getTrendingMovies()
        setMoviesDay(response.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { moviesDay, loading, error }
}
