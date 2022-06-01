import { defineStore } from 'pinia'
import { ILayoutState } from './type'

export const useLayoutStore = defineStore('layout', {
  state: (): ILayoutState => {
    return {
      searchValue: ''
    }
  },
  actions: {
    updataSearchValue(updataSearchValue: string): void {
      this.searchValue = updataSearchValue
    }
  }
})
