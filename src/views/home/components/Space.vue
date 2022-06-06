<template>
  <div class="space">
    <slot>
      <p class="space-title color-6 margin-bottom-16">知识空间</p>
    </slot>
    <!-- 树结构 -->
    <SideTree />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideTree from '@/components/side-tree'

export default defineComponent({
  name: 'space',
  components: {
    SideTree
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.space-title {
  font-family: PingFang SC;
  font-weight: 500;
}
</style>
