export const MovieCard = ({ movie }) => {
  return (
    <div className='relative h-55 w-35 bg-blue-700 md:h-65 md:w-50 overflow-hidden'>
      <div className='relative h-[80%] w-full overflow-hidden rounded-xs bg-amber-300'>
        <span className='absolute text-xs z-20 right-2.5 top-2 bg-[#2c2c2e] rounded-2xl'>
          ⭐ 9.6
        </span>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.title}
          className='w-full h-full object-cover opacity-85'
        />
      </div>

      <article className='flex flex-col'>
        <span className='text-center tracking-wider leading-tight'>
          {movie?.title}
          <br />
          <span className='text-primary text-xs'>{movie?.release_date}</span>
        </span>
      </article>
    </div>
  )
}
