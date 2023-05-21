declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_KC_CLIENT_ID: string
    NEXT_PUBLIC_KC_SECRET: string
    NEXT_PUBLIC_KC_URL: string
    NEXT_PUBLIC_KC_REALM: string

    NEXT_PUBLIC_LANDING_URL: string
    NEXT_PUBLIC_STORE_URL: string
    NEXT_PUBLIC_PLATFORM_URL: string

    NEXT_PUBLIC_USER_SERVICE: string
  }
}
