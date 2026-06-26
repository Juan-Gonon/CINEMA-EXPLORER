import { tmdbClient } from '../api/tmdb'

export const getTrendingMovies = async () => {
  try {
    const response = await tmdbClient.get('/trending/movie/day')

    if (!response.data) throw new Error('Error fetching movies')

    return response.data
  } catch (error) {
    console.error('Error fetching trending movies: ', error)
    throw error
  }
}

export const getPopularMovies = async () => {
  try {
    const response = await tmdbClient.get('/movie/popular')

    if (!response) throw new Error('Error fetching popular movies')

    return response.data
  } catch (error) {
    console.error('Error fetching popularmoves', error)
    throw error
  }
}

export const getUpcomingMovies = async () => {
  try {
    const response = await tmdbClient.get('/movie/upcoming')

    if (!response) throw new Error('Error fetching popular movies')

    return response.data
  } catch (error) {
    console.error('Error fetching now playing', error)
    throw error
  }
}

export const searchMovies = async (query) => {
  if (!query || query.trim() === '') return []
  try {
    const res = await tmdbClient.get('/search/movie', {
      params: {
        query: query.trim(),
      },
    })

    return res.data.results || []
  } catch (error) {
    console.error('Error en searchMovies service:', error)
    throw error
  }
}

export const getMoviesDetails = async (movieId) => {
  const id = Number(movieId)

  if (!movieId || !Number.isInteger(id)) {
    console.warn(`ID inválido proporcionado: ${movieId}`)
    return null
  }

  try {
    const res = await tmdbClient.get(`/movie/${id}`)

    return res.data || null
  } catch (error) {
    console.error(
      'Error en Movie Details service:',
      error.response?.data || error.message
    )
    throw error
  }
}

export const getMovieCredits = async (movieId) => {
  const id = Number(movieId)
  if (!id || !Number.isInteger(id)) {
    console.warn(`ID inválido proporcionado: ${id}`)
    return null
  }
  try {
    const res = await tmdbClient.get(`/movie/${id}/credits`)

    // console.log(res.data?.cast)
    return res.data?.cast || []
  } catch (error) {
    console.error(
      'Error en Movie Credits:',
      error.response?.data || error.message
    )
    throw error
  }
}

export const getMovieVideo = async (movieId) => {
  const id = Number(movieId)

  if (!id || !Number.isInteger(id)) {
    console.warn(`ID inválido proporcionado: ${id} `)
    return null
  }
  try {
    const res = await tmdbClient.get(`/movie/${id}/videos`)
    // console.log(res)

    return res.data.results || []
  } catch (error) {
    console.error('Error en Movie Video', error.response?.data || error.message)
    throw error
  }
}

export const getMovieCollection = async (collectionId) => {
  const id = Number(collectionId)

  if (!id || !Number.isInteger(id)) {
    console.warn(`Id invalido proporcionado ${id}`)
    return null
  }
  try {
    const res = await tmdbClient.get(`/collection/${id}`)

    return res.data || []
  } catch (error) {
    console.error(
      'Error en movie collection',
      error.response?.data || error.message
    )
  }
}
