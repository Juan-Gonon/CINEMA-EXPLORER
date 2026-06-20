import { useMovieDetails } from '../hooks/useMovieDetails'

export const MovieDetailsPage = () => {
  const { movie } = useMovieDetails()

  return <div>MovieDetailsPage</div>
}
