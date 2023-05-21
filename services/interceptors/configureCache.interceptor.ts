import { AxiosCacheInstance, defaultRequestInterceptor } from 'axios-cache-interceptor'

import { cachePages } from 'constants/cachePages'

export const configureCacheInterceptor = (instance: AxiosCacheInstance) => {
  instance.interceptors.request.use((request) => {
    if (request.cache === false) return request

    const isSamePage = (page: string): boolean => request.id === page

    const hasCache = !cachePages.withoutCache.some(isSamePage)
    if (!hasCache) {
      request.cache = false
      return request
    }

    const hasOverride = !cachePages.withoutOverride.some(isSamePage)
    request.cache = { ...request.cache, override: hasOverride }

    return request
  })

  return defaultRequestInterceptor(instance)
}
