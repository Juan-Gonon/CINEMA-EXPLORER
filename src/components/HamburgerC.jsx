export const HamburgerC = ({ isOpen, handleIsOpen }) => {
  return (
    <button
      onClick={handleIsOpen}
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
  )
}
