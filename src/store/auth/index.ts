import { defineStore } from 'pinia'
import { IAuthState } from './type'

export const useAuthStore = defineStore('auth', {
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
