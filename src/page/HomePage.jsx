import { HeroCarousel } from '../components/movies/HeroCarousel'
import { MovieGrid } from '../components/movies/MovieGrid'
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
    <div className='w-full min-h-screen   space-y-12 pb-12'>
      <div className='relative w-full min-h-[85vh] rounded-2xl md:min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden'>
        <HeroCarousel key={moviesDay.id} movies={moviesDay} />
      </div>
      <div className='px-6 md:px-12 space-y-12 relative z-20'>
        <section className='flex flex-col gap-2 relative'>
          <div className='flex justify-between pt-1.5 items-center'>
            <h2 className='text-base font-boldfont-headline uppercase tracking-tight'>
              Popular Movies
            </h2>
            <div>
              <span className=' text-primary'>View All</span>
            </div>
          </div>
          <section>
            <MovieGrid />
          </section>
        </section>
      </div>
    </div>
  )
}
