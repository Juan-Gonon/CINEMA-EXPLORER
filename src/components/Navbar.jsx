import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className='w-full bg-bg-dark/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 px-4 md:px-12 py-3 md:py-0 md:h-20 flex flex-row items-center justify-between'>
      {/* ─── LOGO (Izquierda siempre) ─── */}
      <Link
        to='/'
        className='font-headline font-black text-xl tracking-wider text-primary z-50 shrink-0'
        onClick={closeMenu}>
        CINEMA<span className='text-white font-light'>EXPLORER</span>
      </Link>

      {/* ─── EL CONTENEDOR CENTRAL (Tu idea mejorada) ─── */}
      {/* En móvil: Se apilan (flex-col), el perfil arriba y buscador abajo. */}
      {/* En escritorio: Se vuelven una fila (md:flex-row) y se mueven al extremo derecho automáticamente (`md:order-3`) */}
      <div className='flex flex-col md:flex-row-reverse items-center gap-1.5 md:gap-4 w-full max-w-45 sm:max-w-60 md:max-w-none md:w-auto md:order-3'>
        {/* Avatar Único */}
        <div className='w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs md:text-sm cursor-pointer transition-transform hover:scale-105'>
          👤
        </div>

        {/* Input de Búsqueda */}
        <div className='relative w-full md:w-60'>
          <input
            type='text'
            placeholder='Search movies...'
            className='bg-[#1A1A1E] text-xs md:text-sm text-white px-3 py-1.5 md:py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full border border-white/5 placeholder:text-gray-500'
          />
        </div>
      </div>

      {/* ─── LINKS CENTRALES (Solo Escritorio) ─── */}
      {/* Con `md:order-2` nos aseguramos de que en PC quede exactamente en medio de la barra */}
      <nav className='hidden md:flex items-center gap-8 text-sm font-medium md:order-2'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-white border-b-2 border-primary pb-1'
              : 'text-text-muted hover:text-white transition-colors'
          }>
          Home
        </NavLink>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            isActive
              ? 'text-white border-b-2 border-primary pb-1'
              : 'text-text-muted hover:text-white transition-colors'
          }>
          Movies
        </NavLink>
        <NavLink
          to='/favorites'
          className={({ isActive }) =>
            isActive
              ? 'text-white border-b-2 border-primary pb-1'
              : 'text-text-muted hover:text-white transition-colors'
          }>
          Favorites
        </NavLink>
      </nav>

      {/* ─── 🍔 BOTÓN HAMBURGUESA (Solo Móvil) ─── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden z-50 text-white focus:outline-none p-2 cursor-pointer shrink-0'
        aria-label='Toggle Menu'>
        <div className='w-6 h-5 flex flex-col justify-between relative'>
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span
            className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* ─── 📱 OVERLAY MENÚ MÓVIL (Solo Links) ─── */}
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
