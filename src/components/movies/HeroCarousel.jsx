import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'

// Importar los estilos necesarios de Swiper
import 'swiper/css'
import 'swiper/css/effect-fade'

export const HeroCarousel = ({ movies }) => {
  const heroMovies = movies?.slice(0, 10) || []

  if (heroMovies.length === 0) return null

  return (
    <div className='absolute inset-0 w-full h-full z-0 mask-b-from-85% mask-b-to-95%'>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect={'coverflow'}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='w-full h-full rounded-2xl'>
        {heroMovies.map((movie) => {
          const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

          return (
            <SwiperSlide key={movie.id} className='w-full h-full relative'>
              <div className='absolute max-w-2xl bottom-30 left-6 md:left-20 z-100 space-y-4'>
                <span className='inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider'>
                  Trending Now
                </span>

                <h1 className='font-headline font-black text-3xl md:text-5xl tracking-tight text-white uppercase'>
                  {movie?.title || 'The Neon Edge'}
                </h1>

                <p className='text-text-muted text-base md:text-lg leading-tight line-clamp-2'>
                  {movie?.overview ||
                    'In a world where memories are traded like currency...'}
                </p>

                <div className='flex flex-wrap gap-4 pt-4'>
                  <button className='bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer'>
                    ▶ Watch Trailer
                  </button>
                  <button className='border border-white/20 hover:border-white/40 bg-[#16161A]/50 text-white font-medium px-6 py-3 rounded-lg transition-all cursor-pointer'>
                    ℹ️ More Details
                  </button>
                </div>
              </div>
              <img
                className='w-full h-full object-cover opacity-60'
                src={backdropUrl}
                alt={movie.title}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className='absolute inset-0 bg-linear-to-t from-[#16161A] via-[#16161A]/40 to-transparent z-10' />
    </div>
  )
}
