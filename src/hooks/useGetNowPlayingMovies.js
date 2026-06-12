import { useEffect } from 'react'
import { useState } from 'react'
import { getUpcomingMovies } from '../services/getMovies'

export const useUpcomingMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getUpcomingMovies()
        setNowPlaying(res.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { nowPlaying, loading, error }
}
