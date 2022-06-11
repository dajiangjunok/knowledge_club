import { useRouter } from 'vue-router'
import { useLayoutStore } from '@/store/layout'

export function useLinkSearch() {
  const router = useRouter()
  const { updataIsFixBanner, isFixBanner } = useLayoutStore()

  const handleChangeSearch = (): void => {
    if (!isFixBanner) {
      updataIsFixBanner(true)
    }

    router.push({
      path: '/search'
    })
  }

  return { handleChangeSearch }
}
