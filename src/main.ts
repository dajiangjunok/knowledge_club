import { createApp } from 'vue'
import { globalRegister } from './global'
import { createPinia } from 'pinia'
import auth from './lib/auth'

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

  console.log(user.profile)
  // 将登陆人信息存入store
})

import App from './App.vue'

// import 'element-plus/theme-chalk/src/common/var.scss'
// import 'element-plus/theme-chalk/index.css'
import '@/assets/css/index.scss'
import 'normalize.css'

import router from './router'

const app = createApp(App)

// registerApp(app) // 注册相关插件
app.use(globalRegister)
app.use(router)
app.use(createPinia())

app.mount('#app')
