export const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer'>
      {text}
    </button>
  )
}
