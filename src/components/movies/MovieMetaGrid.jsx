export const MovieMetaGrid = ({ movie }) => {
  // Helper para formatear dinero (USD)
  const formatCurrency = (amount) => {
    if (!amount) return '—'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 items-start'>
      {/* Poster en móvil visible (Oculto en desktop porque ya está arriba) */}
      <div className='flex justify-center md:hidden'>
        <img
          alt={movie.title}
          className='w-48 aspect-2/3 rounded-xl shadow-2xl border border-white/10 object-cover'
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>

      {/* Lateral Izquierdo o Información de Compañías */}
      <div className='space-y-6'>
        <div>
          <h3 className='font-headline text-xs font-bold text-text-muted uppercase tracking-widest mb-3'>
            Géneros
          </h3>
          <div className='flex flex-wrap gap-2'>
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className='bg-white/5 border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm'>
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {movie.production_companies?.length > 0 && (
          <div>
            <h3 className='font-headline text-xs font-bold text-text-muted uppercase tracking-widest mb-3'>
              Producción
            </h3>
            <div className='flex flex-wrap gap-3 items-center opacity-80'>
              {movie.production_companies.slice(0, 3).map((company) => (
                <span
                  key={company.id}
                  className='text-xs font-bold bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-white'>
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lateral Derecho: Sinopsis y Caja de Finanzas (Bento) */}
      <div className='space-y-6'>
        <div className='space-y-2'>
          <h3 className='font-headline text-xs font-bold text-primary uppercase tracking-widest'>
            Sinopsis
          </h3>
          <p className='font-body text-body text-white/90 leading-relaxed text-sm md:text-base'>
            {movie.overview ||
              'No hay una sinopsis disponible para esta película.'}
          </p>
        </div>

        {/* Panel Financiero Estilo Bento */}
        <div className='grid grid-cols-2 gap-4 pt-2'>
          <div className='bg-white/2 border border-white/5 backdrop-blur-md p-4 rounded-xl space-y-1'>
            <p className='font-headline text-[10px] font-semibold text-text-muted uppercase tracking-wider'>
              Presupuesto
            </p>
            <p className='font-body text-lg font-bold text-white'>
              {formatCurrency(movie.budget)}
            </p>
          </div>
          <div className='bg-white/2 border border-white/5 backdrop-blur-md p-4 rounded-xl space-y-1'>
            <p className='font-headline text-[10px] font-semibold text-text-muted uppercase tracking-wider'>
              Recaudación
            </p>
            <p className='font-body text-lg font-bold text-secondary'>
              {formatCurrency(movie.revenue)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
