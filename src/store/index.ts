import { useAuthStore } from './auth/index'

// 统一导出useStore方法
export default function useStore() {
  return {
    auth: useAuthStore()
  }
}
