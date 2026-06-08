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

  const mainMovie = moviesDay?.[1]

  return (
    <div className='relative w-full min-h-[85vh] rounded-2xl md:min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden'>
      {/* CONTENEDOR DEL TEXTO (ENCIMA) */}
      <div className='relative max-w-2xl z-10 space-y-4'>
        <span className='inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider'>
          Trending Now
        </span>

        <h1 className='font-headline font-black text-4xl md:text-6xl tracking-tight text-white uppercase'>
          {mainMovie?.title || 'The Neon Edge'}
        </h1>

        <p className='text-text-muted text-base md:text-lg leading-relaxed line-clamp-3'>
          {mainMovie?.overview ||
            'In a world where memories are traded like currency...'}
        </p>

        <div className='flex flex-wrap gap-4 pt-4'>
          <button className='bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer'>
            ▶ Watch Trailer
          </button>
          <button className='border border-white/20 hover:border-white/40 bg-[#16161A]/50 text-white font-medium px-6 py-3 rounded-lg transition-all cursor-pointer'>
            ℹ️ More Details
          </button>
        </div>
      </div>

      {/* CONTENEDOR DE LA IMAGEN DE FONDO */}
      {/* <div className='absolute inset-0 w-full h-full z-0 mask-b-from-20% mask-b-to-80%'>
        <img
          className='w-full h-full object-cover opacity-60'
          src={`https://image.tmdb.org/t/p/original/${mainMovie?.poster_path}`}
          alt={mainMovie?.title}
        />

        <div className='absolute inset-0 bg-linear-to-t from-[#16161A] via-[#16161A]/40 to-transparent' />
      </div> */}
      <HeroCarousel key={moviesDay.id} movies={moviesDay} />
    </div>
  )
}
