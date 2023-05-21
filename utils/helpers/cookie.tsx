const getCookie = () => document.cookie.includes('acceptCookie=true')

const setCookie = () => {
  const domian = window.document.domain.includes('cloudlabs.media')
    ? '.cloudlabs.media'
    : 'localhost'
  document.cookie = `acceptCookie=true; domain=${domian}; path=/; max-age=31536000; `
}

export { getCookie, setCookie }
