import { useGetPopularMovie } from '../../hooks/useGetPopularMovie'
import { MovieCard } from './MovieCard'

export const MovieGrid = () => {
  const { popular } = useGetPopularMovie()

  const movie = popular[0]
  console.log(movie)
  return (
    <div className='relative bg-amber-950 p-2'>
      <MovieCard movie={movie} />
    </div>
  )
}
