const imageExtensionsRegex =
  /\.(jpeg|jpg|gif|png|svg|webp|avif|apng|bmp|ico|cur|tiff|tif|jfif|pjpeg|pjp|xbm)$/

export const hasImageExtension = (src: string) => src?.match(imageExtensionsRegex)
