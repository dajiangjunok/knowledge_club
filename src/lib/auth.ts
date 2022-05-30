import { initAuthClient } from '@mdfe/auth'

let origin = location.origin
if (window.location.href.toLowerCase().indexOf('.mediinfo.') < 0) {
  origin += '/home/'
}

const auth = initAuthClient({
  client_id: 'mcrp',
  // 支持传递完整的 URL
  authority: '/mcrp-authserver',
  redirect_uri: `${origin}#/callback`,
  silent_redirect_uri: `${origin}#/silent-callback`
})

export default auth
