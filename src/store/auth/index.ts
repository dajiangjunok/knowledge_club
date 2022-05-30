import { defineStore } from 'pinia'
import { IAuthState } from './type'

const useAuthStore = defineStore('auth', {
  state: (): IAuthState => {
    return {
      user: {}
    }
  },
  actions: {
    updataUser(user: any): void {
      this.user = user
    }
  }
})

export default useAuthStore
