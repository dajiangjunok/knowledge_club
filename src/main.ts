import { createApp } from 'vue'
import { globalRegister } from './global'
import { createPinia } from 'pinia'
import { oidcCheck, catchError, main } from '@/lib/oidc'

import App from './App.vue'

import '@/assets/css/index.scss'
import 'normalize.css'

import router from './router'

const app = createApp(App)

// registerApp(app) // 注册相关插件
app.use(globalRegister)
app.use(router)
app.use(createPinia())

// 拿到store对象后开始认证
oidcCheck().then(() => {
  main()
    .then(() => app.mount('#app'))
    .catch(catchError)
})
