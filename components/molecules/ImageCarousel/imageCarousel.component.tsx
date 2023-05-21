import Image from 'next/image'

import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'

import { PropsImageCarousel } from './imageCarousel.model'

const ImageCarouselComponent = ({ url, alt }: PropsImageCarousel) => (
  <div style={{ display: 'flex' }}>
    {url && (
      <Image
        src={url ?? DEFAULT_ICON_IMG_PROPS.image}
        alt={alt || DEFAULT_ICON_IMG_PROPS.alt}
        width={1200}
        height={675}
        className="carousel__image"
      />
    )}
  </div>
)

export default ImageCarouselComponent
