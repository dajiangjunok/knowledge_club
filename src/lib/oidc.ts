import auth from './auth'
import useStore from '@/store/index'

export function oidcCheck() {
  const store = useStore()
  // 如果用户未登录，就会自动跳转到登录页面
  auth.prepare().then(({ user, appState }) => {
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
    store.auth.updataUser(user.profile)
  })
}
