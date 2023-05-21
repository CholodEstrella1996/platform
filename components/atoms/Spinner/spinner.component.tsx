import Image from 'next/image'

import { DEFAULT_SPINNER_IMG_PROPS } from 'constants/defaultStaticImages'

import { SpinnerStyles } from './spinner.styles'

export const Spinner = () => (
  <>
    <div className="spinner__container">
      <Image
        src={DEFAULT_SPINNER_IMG_PROPS.image}
        alt={DEFAULT_SPINNER_IMG_PROPS.alt}
        layout="fixed"
        objectFit="contain"
        priority
      />
    </div>
    <style jsx>{SpinnerStyles}</style>
  </>
)
