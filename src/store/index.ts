import { useAuthStore } from './auth/index'
import { useLayoutStore } from './layout/index'

// 统一导出useStore方法
export default function useStore() {
  return {
    auth: useAuthStore(),
    layout: useLayoutStore()
  }
}
