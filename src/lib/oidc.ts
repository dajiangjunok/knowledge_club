import auth from './auth'
import useStore from '@/store/index'

/**
 * oidc认证
 */
export async function oidcCheck(): Promise<any> {
  const store = useStore()
  // 如果用户未登录，就会自动跳转到登录页面
  const { user, appState } = await auth.prepare()
  // 如果用户第一次进来，会跳转到登录页面
  // 跳转前的地址会作为 targetUrl 存储
  const targetUrl = appState ? appState.targetUrl : null

  // 在这里根据实际情况处理
  // 这里只是粗暴的页面替换
  if (targetUrl) {
    window.location.replace(targetUrl)
    return
  }
  // 将登陆人信息存入store
  store.auth.updateUser(user.profile)
}
/**
 * 认证失败
 * @param err
 */
export function catchError(err: any) {
  /**
   * @type {HTMLDivElement}
   */
  const loadingElm = document.getElementById('loading')
  if (loadingElm) {
    loadingElm.remove()
  }

  /**
   * @type {HTMLDivElement}
   */
  const errorElm = document.getElementById('error')
  if (errorElm) {
    errorElm.classList.remove('u-hidden')

    const msgElm = errorElm.querySelector('.errmsg__message')
    if (err.isAxiosError) {
      const response = err.response
      const { url, method } = err.config

      msgElm &&
        (msgElm.innerHTML = `[${method.toUpperCase()}] ${url} ${
          response.status
        }`)
    } else {
      msgElm && (msgElm.innerHTML = err.message)
    }
  }
}
/**
 * 认证结束后执行的操作
 */
export async function main() {
  // 页面加载前发送的网络请求等操作
  await Promise.resolve()
}
