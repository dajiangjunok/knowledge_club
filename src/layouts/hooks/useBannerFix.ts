import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useBannerFix() {
  const layoutRef = ref()
  const bannerRef = ref()
  const isFixBanner = ref(false)
  let scrollListenerFn: any
  let layoutEl: Element
  let bannerEl: Element

  /**
   * 监听滚动
   */
  onMounted(() => {
    layoutEl = layoutRef.value
    bannerEl = bannerRef.value

    scrollListenerFn = (): void => {
      if (layoutEl.scrollTop > bannerEl.clientHeight) {
        // 此时滚动的距离超过了头部banner高度，需要渐隐藏原有banner，
        // 改为新较窄banner，并定位于顶部
        isFixBanner.value = true
      } else {
        isFixBanner.value = false
      }
    }

    layoutEl.addEventListener('scroll', scrollListenerFn)
  })

  /**
   * 移除监听滚动
   */
  onBeforeUnmount(() => {
    layoutEl.removeEventListener('scroll', scrollListenerFn)
  })

  return { layoutRef, bannerRef, isFixBanner }
}
