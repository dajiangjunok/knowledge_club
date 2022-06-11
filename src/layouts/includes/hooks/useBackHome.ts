import { useRouter } from 'vue-router'
import { useLayoutStore } from '@/store/layout'
import { storeToRefs } from 'pinia'

export function useBackHome() {
  const router = useRouter()
  const layoutStore = useLayoutStore()
  const { updataIsFixBanner, updataSearchValue } = layoutStore
  const { isFixBanner } = storeToRefs(layoutStore)

  const handleBackHome = (): void => {
    if (isFixBanner) {
      updataIsFixBanner(false)
      updataSearchValue('')
    }

    router.push({
      path: '/'
    })
  }

  return { handleBackHome }
}
