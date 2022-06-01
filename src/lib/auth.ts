import { initAuthClient } from '@mdfe/auth'

const origin = process.env.BASE_URL

const auth = initAuthClient({
  client_id: 'mcrp',
  // 支持传递完整的 URL
  authority: '/mcrp-authserver',
  redirect_uri: `${origin}#/callback`,
  silent_redirect_uri: `${origin}#/silent-callback`,
  post_logout_redirect_uri: `${origin}#/`,
  scope: 'openid',
  response_type: 'code',
  filterProtocolClaims: true,
  automaticSilentRenew: true
})

export default auth
