export const MovieCast = ({ cast }) => {
  if (!cast || cast.length === 0) return null

  // Cortamos para no saturar el navegador con demasiados nodos
  const mainCast = cast.slice(0, 12)

  return (
    <section className='space-y-4 pt-4'>
      <h3 className='font-headline text-xs font-bold text-primary uppercase tracking-widest'>
        El Reparto Principal
      </h3>

      {/* Contenedor Flex con Scroll Horizontal Premium */}
      <div className='flex overflow-x-auto gap-4 pb-4 -mx-2 px-2 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent'>
        {mainCast.map((actor) => {
          const profileUrl = actor.profile_path
            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
            : 'https://via.placeholder.com/150x150?text=No+Photo' // Fallback elegante

          return (
            <div
              key={actor.id}
              className='flex-none w-24 flex flex-col items-center text-center space-y-2 group'>
              {/* Imagen Circular con Borde Estilo Stitch */}
              <div className='w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 shadow-lg group-hover:border-primary/50 transition-all duration-300'>
                <img
                  src={profileUrl}
                  alt={actor.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>

              {/* Textos Informativos */}
              <div className='space-y-0.5'>
                <p className='font-body text-xs font-bold text-white truncate w-24'>
                  {actor.name}
                </p>
                <p className='font-body text-[10px] text-text-muted truncate w-24 italic'>
                  {actor.character}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
