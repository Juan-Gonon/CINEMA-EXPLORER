import { Button } from '../Button'

export const MovieMetaD = ({ movie }) => {
  // Helper para formatear tiempo (128 -> 2h 8m)
  const formatRuntime = (minutes) => {
    if (!minutes) return '—'
    const hrs = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`
  }

  return (
    <div className='flex flex-wrap items-center gap-4 text-text-muted text-sm border-b border-white/5 pb-4'>
      <div className='flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md text-white font-bold'>
        <span className='text-yellow-500'>⭐</span>
        <span>{movie.vote_average?.toFixed(1)}</span>
      </div>
      <span>•</span>
      <span>{movie.release_date?.split('-')[0]}</span>
      <span>•</span>
      <span>{formatRuntime(movie.runtime)}</span>
      {movie.adult && (
        <>
          <span>•</span>
          <span className='px-1.5 py-0.5 border border-red-500/40 text-red-400 text-xs rounded font-bold'>
            18+
          </span>
        </>
      )}
      <span>•</span>
      <Button text={'▶ Watch Trailer'} />
    </div>
  )
}
