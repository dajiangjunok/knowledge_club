import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/store/layout'

interface ISearch {
  searchValue: Ref<string>
}

export function useSearch(): ISearch {
  const layoutStore = useLayoutStore()
  const { searchValue } = storeToRefs(layoutStore)

  return {
    searchValue
  }
}
