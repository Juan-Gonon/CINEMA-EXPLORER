import { useGetTrendingMovies } from '../hooks/useGetTrendingMovies'

export const HomePage = () => {
  const { moviesDay, error, loading } = useGetTrendingMovies()

  console.log(moviesDay)

  return (
    <div className='relative w-full min-h-[80vh] flex flex-col justify-center px-6 md:px-12 py-12'>
      {/* Contenedor del Texto (Como en tu segunda imagen) */}

      <div className='max-w-2xl z-10 space-y-4'>
        {/* Badge "Trending Now" */}
        <span className='inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider'>
          Trending Now
        </span>

        {/* Título usando Montserrat (font-headline) */}
        <h1 className='font-headline font-black text-4xl md:text-6xl tracking-tight text-white uppercase'>
          The Neon Edge
        </h1>

        {/* Descripción usando Inter (fuente por defecto) */}
        <p className='text-text-muted text-base md:text-lg leading-relaxed'>
          In a world where memories are traded like currency, a rogue detective
          uncovers a conspiracy that threatens to erase the history of the
          entire human race.
        </p>

        {/* Botones del UI KIT */}
        <div className='flex flex-wrap gap-4 pt-4'>
          {/* Botón Primario Rojo */}
          <button className='bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer'>
            ▶ Watch Trailer
          </button>

          {/* Botón Outlined / Secundario de tu UI Kit */}
          <button className='border border-white/20 hover:border-white/40 bg-[#16161A]/50 text-white font-medium px-6 py-3 rounded-lg transition-all cursor-pointer'>
            ℹ️ More Details
          </button>
        </div>
      </div>

      {/* Nota: Aquí meterías luego la imagen de fondo con opacidad o un degradado */}
    </div>
  )
}
