import { useGetPopularMovie } from '../../hooks/useGetPopularMovie'
import { MovieCard } from './MovieCard'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

export const MovieGrid = () => {
  const { popular } = useGetPopularMovie()

  // const movie = popular[0]
  // console.log(movie)
  return (
    <div className='relative '>
      {/* <MovieCard movie={movie} /> */}
      <Swiper
        slidesPerView={3}
        // spaceBetween={130}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
        }}
        className='mySwiper w-full h-full rounded-xss '>
        {popular?.map((movie) => (
          <SwiperSlide className='w-full h-full relative '>
            <MovieCard movie={movie} key={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
