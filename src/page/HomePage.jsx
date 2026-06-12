import { HeroCarousel } from '../components/movies/HeroCarousel'
import { MovieGrid } from '../components/movies/MovieGrid'
import { useGetTrendingMovies } from '../hooks/useGetTrendingMovies'
import { useGetPopularMovie } from '../hooks/useGetPopularMovie'
import { useUpcomingMovies } from '../hooks/useGetNowPlayingMovies'

export const HomePage = () => {
  const { nowPlaying, error, loading } = useUpcomingMovies()
  const {
    moviesDay,
    error: trendingError,
    loading: trendingLoading,
  } = useGetTrendingMovies()
  const {
    popular,
    loading: loadingPopular,
    error: errorPopular,
  } = useGetPopularMovie()

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
    <div className='w-full min-h-screen   space-y-12 pb-12'>
      <div className='relative w-full min-h-[85vh] rounded-2xl md:min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden'>
        <HeroCarousel key={nowPlaying.id} movies={nowPlaying} />
      </div>
      <div className='px-6 md:px-12 space-y-12 relative z-20 '>
        {/* Sección 1: Movies Day */}
        <section className='flex flex-col gap-2 relative'>
          <h2>Movies Day</h2>
          <div className='pt-2 pb-4 pl-2'>
            {trendingLoading ? (
              <div className='text-sm text-text-muted animate-pulse'>
                Cargando tendencias...
              </div>
            ) : trendingError ? (
              <div className='text-sm text-red-500'>
                No se pudieron cargar las tendencias
              </div>
            ) : (
              <MovieGrid movies={moviesDay} />
            )}
          </div>
        </section>

        {/* Sección 2: Popular Movies */}
        <section className='flex flex-col gap-2 relative'>
          <h2>Popular Movies</h2>
          <div className='pt-2 pb-4 pl-2'>
            {loadingPopular ? (
              <div className='text-sm text-text-muted animate-pulse'>
                Cargando populares...
              </div>
            ) : errorPopular ? (
              <div className='text-sm text-red-500'>
                No se pudieron cargar las populares
              </div>
            ) : (
              <MovieGrid movies={popular} />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
