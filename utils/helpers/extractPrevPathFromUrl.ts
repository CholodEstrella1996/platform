export const extractPrevPathFromUrl = (url: string, fragment: string) => {
  const splittedUrl = url.split(`/${fragment}/`)

  return splittedUrl[0]
}
