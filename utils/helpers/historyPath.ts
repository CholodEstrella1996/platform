const URL_KEYCLOAK = '#state'

export const historyPath = (path: string) => path.split(URL_KEYCLOAK).shift() || path
