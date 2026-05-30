import './api/tmdb'
import { useGetTrendingMovies } from './hooks/useGetTrendingMovies'
import { AppRouter } from './router/AppRouter'

function App() {
  const { moviesDay } = useGetTrendingMovies()

  console.log(moviesDay)
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
