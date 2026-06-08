import { HeroCarousel } from '../components/movies/HeroCarousel'
import { useGetTrendingMovies } from '../hooks/useGetTrendingMovies'

export const HomePage = () => {
  const { moviesDay, error, loading } = useGetTrendingMovies()

  if (loading)
    return (
      <div className='min-h-screen flex items-center justify-center text-xl'>
        Cargando cine...
      </div>
    )
  if (error)
    return (
      <div className='min-h-screen flex items-center justify-center text-red-500'>
        Error al cargar películas
      </div>
    )

  return (
    <div className='relative w-full min-h-[85vh] rounded-2xl md:min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden'>
      {/* CONTENEDOR DEL TEXTO (ENCIMA) */}

      <HeroCarousel key={moviesDay.id} movies={moviesDay} />
    </div>
  )
}
