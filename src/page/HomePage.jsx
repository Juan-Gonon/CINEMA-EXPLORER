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
        <section className='flex flex-col gap-2 relative bg-[#16161A]/50 pt-2 pb-2 mask-y-from-90% mask-y-to-95%'>
          <div className='flex justify-between pt-1.5 md:p-5 md:justify-around items-center '>
            <h2 className='text-base font-boldfont-headline uppercase tracking-tight'>
              Movies Day
            </h2>
            <div>
              <span className=' text-primary'>View All</span>
            </div>
          </div>
          <section className='pt-2 pb-4 pl-2'>
            {
              /* <MovieGrid /> */
              <MovieGrid movies={moviesDay} />
            }
          </section>
        </section>
        <section className='flex flex-col gap-2 relative'>
          <div className='flex justify-between pt-1.5 md:p-2 md:justify-around items-center'>
            <h2 className='text-base font-boldfont-headline uppercase tracking-tight'>
              Popular Movies
            </h2>
            <div>
              <span className=' text-primary'>View All</span>
            </div>
          </div>
          <section className=' pt-2 pb-4 pl-2'>
            {
              /* <MovieGrid /> */
              <MovieGrid movies={popular} />
            }
          </section>
        </section>
      </div>
    </div>
  )
}
