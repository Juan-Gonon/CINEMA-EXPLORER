import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavLinkC } from './NavLinkC'
import { HamburgerC } from './HamburgerC'
import { InputSearch } from './InputSearch'
import { useSearchMovie } from '../hooks/useSearchMovie'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  const handleIsOpen = () => setIsOpen(!isOpen)
  const { searchParams, onchangeSearchQuery } = useSearchMovie()

  return (
    <header className='w-full bg-bg-dark/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 px-4 md:px-12 py-3 md:py-0 md:h-20 flex flex-row items-center justify-between'>
      <Link
        to='/'
        className='font-headline font-black text-xl tracking-wider text-primary z-50 shrink-0'
        onClick={closeMenu}>
        CINEMA<span className='text-white font-light'>EXPLORER</span>
      </Link>

      <div className='flex flex-col md:flex-row-reverse items-center gap-1.5 md:gap-4 w-full max-w-45 sm:max-w-60 md:max-w-none md:w-auto md:order-3'>
        {/* Avatar */}
        <div className='w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs md:text-sm cursor-pointer transition-transform hover:scale-105'>
          👤
        </div>

        {/* Input de Búsqueda */}
        <div className='relative w-full md:w-60'>
          <InputSearch
            type='text'
            placeholder='Search movies...'
            onChangeQuery={onchangeSearchQuery}
            query={searchParams.get('search') || ''}
          />
        </div>
      </div>

      <nav className='hidden md:flex items-center gap-8 text-sm font-medium md:order-2'>
        <NavLinkC text='Home' to='/' />
        <NavLinkC text='Movies' to='/movies' />
        <NavLinkC text='Favorites' to='/favorites' />
      </nav>

      {/* ─── BOTÓN HAMBURGUESA */}
      <HamburgerC isOpen={isOpen} handleIsOpen={handleIsOpen} />

      {/* ─── 📱 OVERLAY MENÚ MÓVIL── */}
      <div
        className={`fixed inset-0 bg-bg-dark/55 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className='flex flex-col items-center gap-6 text-xl font-headline font-semibold'>
          <NavLink
            to='/'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-white'
            }>
            Home
          </NavLink>
          <NavLink
            to='/movies'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-white'
            }>
            Movies
          </NavLink>
          <NavLink
            to='/favorites'
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'text-white'
            }>
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
