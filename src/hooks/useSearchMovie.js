import { useState } from 'react'

export const useSearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const onchangeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  return {
    searchQuery,
    onchangeSearchQuery,
  }
}
