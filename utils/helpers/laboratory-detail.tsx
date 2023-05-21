import { Video } from 'components/atoms/Video'
import { CarouselSlide } from 'components/molecules/Carousel/carousel.model'
import ImageCarousel from 'components/molecules/ImageCarousel'
import { Media } from 'services/models/applications.model'

const carouselImage = (medias: Media[]) => {
  const carouselSlides: CarouselSlide[] = medias.map(({ content }) => ({
    id: content.id,
    element:
      content?.kind === 'video' && content?.url ? (
        <Video src={content.url} />
      ) : (
        <ImageCarousel url={content.url} alt={content.name || 'Logo cloudLab'} />
      ),
  }))
  return carouselSlides
}

export { carouselImage }
