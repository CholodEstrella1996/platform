import { useId } from 'react'

import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { CarouselProps } from './carousel.model'
import { CarouselLocalStyles } from './carousel.styles'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Navigation, Pagination])

const CarouselComponent = ({ slides }: CarouselProps) => {
  const carouselId = useId()
  const convertedId = carouselId.replaceAll(':', '_carousel_')
  const isTablet = useMediaQuery(theme.mediaQueries.tablet)

  const breakpoints = {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  }
  return (
    <div className="carousel__container">
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        pagination
        loop={false}
        loopPreventsSlide
        loopFillGroupWithBlank
        navigation={{
          nextEl: `button[id=${convertedId}].next-button`,
          prevEl: `button[id=${convertedId}].prev-button`,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={breakpoints}>
        {slides.map(({ element, id }) => (
          <SwiperSlide key={id}>{element}</SwiperSlide>
        ))}
      </Swiper>
      {isTablet && (
        <>
          <button id={convertedId} type="button" className="prev-button">
            <NavigateBefore />
          </button>

          <button id={convertedId} type="button" className="next-button">
            <NavigateNext />
          </button>
        </>
      )}
      <style jsx>{CarouselLocalStyles}</style>
    </div>
  )
}

export default CarouselComponent
