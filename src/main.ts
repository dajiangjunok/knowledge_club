import { createApp } from 'vue'
import { globalRegister } from './global'
import { createPinia } from 'pinia'
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
