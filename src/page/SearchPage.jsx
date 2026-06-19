import { MovieCard } from '../components/movies/MovieCard'

export const SearchPage = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-24 text-center space-y-4'>
        <span className='text-5xl animate-bounce'>🎬</span>
        <h3 className='text-xl font-headline font-bold text-white'>
          No results found
        </h3>
        <p className='text-sm text-gray-400 max-w-xs'>
          We couldn't find any movies matching your search. Try checking for
          typos or searching another title.
        </p>
      </div>
    )
  }

  return (
    <div className='w-full pb-12 pt-4 px-1 md:px-4'>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 place-items-center md:gap-6'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
