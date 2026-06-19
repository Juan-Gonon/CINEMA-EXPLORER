import { useState } from 'react'
import { useDebounce } from './useDebounce'
import { useEffect } from 'react'
import { searchMovies } from '../services/getMovies'
import { useSearchParams } from 'react-router-dom'

export const useSearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedQuery = useDebounce(searchParams.get('search') || '', 1000)
  const [searchMovie, setSearchMovie] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const onchangeSearchQuery = (e) => {
    const value = e.target.value

    if (value.trim() === '') {
      setSearchParams({})
    } else {
      setSearchParams({ search: value })
    }
  }

  useEffect(() => {
    // console.log(debouceQuery)

    ;(async () => {
      try {
        setLoading(true)

        if (!debouncedQuery.trim()) {
          setSearchMovie([])
          setLoading(false)
          return
        }
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
    searchParams,
    searchMovie,
    error,
    loading,
    onchangeSearchQuery,
  }
}
