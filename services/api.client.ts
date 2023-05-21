import axios, { AxiosRequestConfig } from 'axios'
import { setupCache } from 'axios-cache-interceptor'

import { defaultLanguage } from 'utils/helpers/handleLanguage'

import { configureCacheInterceptor } from './interceptors/configureCache.interceptor'

const config: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': `${defaultLanguage()}`,
    'Content-Type': 'application/json',
  },
}

const config2: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': `${defaultLanguage()}`,
    'Content-Type': 'application/json',
  },
  responseType: 'document',
}

const api = setupCache(axios.create(config), { staleIfError: false })
const apiHtml = setupCache(axios.create(config2), { staleIfError: false })

api.requestInterceptor = configureCacheInterceptor(api)
apiHtml.requestInterceptor = configureCacheInterceptor(apiHtml)

export default api
export { apiHtml }
