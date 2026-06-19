import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { useSearchMovie } from '../hooks/useSearchMovie'
import { SearchPage } from '../page/SearchPage'

export const MainLayout = () => {
  const { error, loading, searchMovie, searchParams, onchangeSearchQuery } =
    useSearchMovie()

  const query = searchParams.get('search') || ''

  return (
    <div className='min-h-dvh relative w-full md:bg-bg-dark text-white flex flex-col'>
      <Navbar
        searchParams={searchParams}
        onchangeSearchQuery={onchangeSearchQuery}
      />
      <main className='flex-1 w-full unified-container'>
        {query.trim() !== '' ? (
          loading ? (
            <div className='text-sm text-text-muted animate-pulse'>
              Cargando...
            </div>
          ) : error ? (
            <div className='text-sm text-red-500'>error...</div>
          ) : (
            <SearchPage movies={searchMovie} />
          )
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  )
}
