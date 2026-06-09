import { useEffect } from 'react'
import { useState } from 'react'
import { getPopularMovies } from '../services/getMovies'

export const useGetPopularMovie = () => {
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getPopularMovies()
        setPopular(res.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {
    popular,
    loading,
    error,
  }
}
