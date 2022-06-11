import { defineStore } from 'pinia'
import { ICommonState } from './type'

export const useAuthStore = defineStore('auth', {
  state: (): ICommonState => {
    return {
      name: 'common'
    }
  },
  actions: {}
})
