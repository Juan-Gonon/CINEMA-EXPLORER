import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'

// Importar los estilos necesarios de Swiper
import 'swiper/css'
import 'swiper/css/effect-fade'

export const HeroCarousel = ({ movies }) => {
  const heroMovies = movies?.slice(0, 10) || []

  if (heroMovies.length === 0) return null

  return (
    <div className='absolute inset-0 w-full h-full z-0 mask-b-from-20% mask-b-to-80%'>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect={'coverflow'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        className='w-full h-full rounded-2xl'>
        {heroMovies.map((movie) => {
          const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

          return (
            <SwiperSlide key={movie.id} className='w-full h-full relative'>
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
