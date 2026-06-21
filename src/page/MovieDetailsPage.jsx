import { MovieMetaD } from '../components/movies/MovieMetaD'
import { MovieMetaGrid } from '../components/movies/MovieMetaGrid'
import { useMovieDetails } from '../hooks/useMovieDetails'

export const MovieDetailsPage = () => {
  const { movie, loading, error } = useMovieDetails()

  // 1. Estados de carga y error defensivos
  if (loading) {
    return (
      <div className='flex min-h-[50vh] items-center justify-center'>
        <div className='text-sm text-text-muted animate-pulse font-headline'>
          Cargando detalles de la película...
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className='flex min-h-[50vh] items-center justify-center'>
        <div className='text-sm text-red-500 font-headline'>
          No se pudieron cargar los detalles de la película.
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen pb-12 animate-fade-in'>
      {/* ─── HERO SECTION (BACKDROP) ─── */}
      <section className='relative w-full h-[35vh] md:h-[55vh] overflow-hidden rounded-2xl'>
        <div
          className='absolute inset-0 bg-cover bg-center transition-all duration-700'
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          }}
        />
        {/* Degradado para fundir el fondo con el color general de la app */}
        <div className='absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/60 to-transparent' />

        {/* Contenido flotante abajo del Backdrop en Desktop */}
        <div className='absolute bottom-0 left-0 w-full px-4 md:px-12 pb-6 hidden md:flex items-end gap-6 z-10'>
          <img
            alt={movie.title}
            className='w-36 aspect-2/3 rounded-xl shadow-2xl border border-white/10 object-cover'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <div className='flex-1 pb-2'>
            <h1 className='font-headline text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md'>
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className='font-body text-sm text-primary tracking-widest italic uppercase mt-1 opacity-90'>
                {movie.tagline}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ─── CONTENIDO DEBAJO DEL HERO (MÓVIL & INFO GENERAL) ─── */}
      <div className='mt-6 px-2 md:px-12 space-y-8'>
        {/* Detalles rápidos para móvil (Título y Tagline aislados) */}
        <div className='block md:hidden space-y-1'>
          <h1 className='font-headline text-3xl font-extrabold text-white leading-tight'>
            {movie.title}
          </h1>
          {movie.tagline && (
            <p className='font-body text-xs text-primary tracking-wider italic uppercase'>
              {movie.tagline}
            </p>
          )}
        </div>

        {/* Bloque de Metadatos Rápidos */}
        <MovieMetaD movie={movie} />
        {/* Grid de Organización Principal */}
        <MovieMetaGrid movie={movie} />
      </div>
    </div>
  )
}
