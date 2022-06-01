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
import { defineComponent } from 'vue'
import Banner from './includes/Banner.vue'
import BannerFix from './includes/BannerFix.vue'
import useBannerFix from './hooks/useBannerFix'

export default defineComponent({
  name: 'Layout',
  components: {
    Banner,
    BannerFix
  },
  setup() {
    // 处理头部banner 固定/不固定
    const { layoutRef, bannerRef, isFixBanner } = useBannerFix()

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
  background-color: #f0f2f5;
  height: 100vh;
  overflow: auto;

  & > .layout-header {
    width: 100%;
  }

  & > .layout-main {
    background-color: skyblue;
    // height: 100%;
  }

  // 头部固定
  & > .fix.layout-header {
    position: fixed;
    top: 0;
    left: 0;
  }

  .fix-enter-from,
  .fix-leave-to {
    opacity: 0;
  }

  .fix-enter-active,
  .fix-leave-active {
    transition: all 1s ease;
  }

  .fix-leave-active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .fix-leave-from,
  .fix-enter-to {
    opacity: 1;
  }
}
</style>
