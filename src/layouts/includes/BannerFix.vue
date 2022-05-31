<template>
  <div class="banner-fix">
    <div>
      <span>banner-fix</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerFix',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.banner-fix {
  min-height: 50px;
  max-height: 50px;
  background-color: red;
  // position: fixed;
  // background-color: orange;
}
</style>
