const KC_URL = process.env.NEXT_PUBLIC_KC_URL
const KC_REALM = process.env.NEXT_PUBLIC_KC_REALM
const KC_CLIENT_ID = process.env.NEXT_PUBLIC_KC_CLIENT_ID

const keycloakCfg = {
  url: KC_URL,
  realm: KC_REALM,
  clientId: KC_CLIENT_ID,
}

export default keycloakCfg
