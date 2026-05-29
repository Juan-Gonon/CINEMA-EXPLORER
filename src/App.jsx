import './api/tmdb'
import { useGetTrendingMovies } from './hooks/useGetTrendingMovies'

function App() {
  const { moviesDay } = useGetTrendingMovies()

  console.log(moviesDay)
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hola</h1>
    </>
  )
}

export default App
