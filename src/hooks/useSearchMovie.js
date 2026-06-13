import { useState } from 'react'
import { useDebounce } from './useDebounce'
import { useEffect } from 'react'

export const useSearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 5000)

  const onchangeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    // console.log(debouceQuery)
  }, [debouncedQuery])

  return {
    searchQuery,
    onchangeSearchQuery,
  }
}
