export const InputSearch = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='bg-[#1A1A1E] text-xs md:text-sm text-white px-3 py-1.5 md:py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full border border-white/5 placeholder:text-gray-500'
    />
  )
}
