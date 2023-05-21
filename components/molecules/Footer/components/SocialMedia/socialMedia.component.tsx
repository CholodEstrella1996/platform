import React from 'react'

import { SocialSVG } from './socialSVG'
import { FooterGlobalStyles } from '../../footer.styles'

const FooterSocialMedia = () => (
  <>
    <div className="footer__medias">
      {SocialSVG.map((media) => (
        <a key={media.id} href={media.href} target="_blank" rel="noreferrer">
          {media.svgMedia}
        </a>
      ))}
    </div>
    <style jsx>{FooterGlobalStyles}</style>
  </>
)
export default FooterSocialMedia
