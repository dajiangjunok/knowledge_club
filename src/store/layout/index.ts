import { defineStore } from 'pinia'
import { ILayoutState } from './type'

export const useLayoutStore = defineStore('layout', {
  state: (): ILayoutState => {
    return {
      searchValue: '',
      isFixBanner: false
    }
  },
  actions: {
    updataSearchValue(updataSearchValue: string): void {
      this.searchValue = updataSearchValue
    },
    updataIsFixBanner(isFixBanner: boolean): void {
      this.isFixBanner = isFixBanner
    }
  }
})
