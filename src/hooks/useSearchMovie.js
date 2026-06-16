import { useState } from 'react'
import { useDebounce } from './useDebounce'
import { useEffect } from 'react'
import { searchMovies } from '../services/getMovies'

export const useSearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 5000)
  const [searchMovie, setSearchMovie] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const onchangeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    // console.log(debouceQuery)
    ;(async () => {
      try {
        setLoading(true)
        const res = await searchMovies(debouncedQuery)

        setSearchMovie(res)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [debouncedQuery])

  return {
    searchQuery,
    searchMovie,
    error,
    loading,
    onchangeSearchQuery,
  }
}
