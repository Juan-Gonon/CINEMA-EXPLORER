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
