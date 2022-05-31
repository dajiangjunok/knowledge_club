<template>
  <div class="layout" ref="layoutRef">
    <div
      class="nav layout-header"
      :class="{ fix: isFixBanner }"
      ref="bannerRef"
    >
      <Banner v-show="!isFixBanner" />

      <transition name="fix">
        <BannerFix v-show="isFixBanner" />
      </transition>
    </div>
    <div class="layout-main">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Banner from './includes/Banner.vue'
import BannerFix from './includes/BannerFix.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Banner,
    BannerFix
  },
  setup() {
    const layoutRef = ref()
    const bannerRef = ref()
    const isFixBanner = ref(false)

    onMounted(() => {
      const layoutEl: Element = layoutRef.value
      const bannerEl: Element = bannerRef.value

      layoutEl.addEventListener('scroll', () => {
        if (layoutEl.scrollTop > bannerEl.clientHeight) {
          // 此时滚动的距离超过了头部banner高度，需要渐隐藏原有banner，
          // 改为新较窄banner，并定位于顶部
          isFixBanner.value = true
        } else {
          isFixBanner.value = false
        }
      })
    })

    return {
      layoutRef,
      bannerRef,
      isFixBanner
    }
  }
})
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  & > .layout-header {
    width: 100%;
    // background-color: orange;
    // min-height: 135px;
    // max-height: 135px;
  }

  & > .layout-main {
    background-color: skyblue;
    // height: 100%;
  }

  .fix.layout-header {
    position: fixed;
    top: 0;
    left: 0;
    // min-height: 50px;
    // max-height: 50px;
    // background-color: red;
  }

  .fix-enter-from,
  .fix-leave-to {
    opacity: 0;
    transition: 1s all;
  }

  .fix-leave-from,
  .fix-enter-to {
    opacity: 1;
    transition: 1s all;
  }
}
</style>
