<template>
  <div class="space">
    <slot>
      <p class="space-title color-6 margin-bottom-16">知识空间</p>
    </slot>
    <!-- 树结构 -->
    <SideTree
      v-for="i in 6"
      :index="i"
      :isSelect="i === treeIndex"
      :key="i"
      @change="handleSideTreeChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideTree from '@/components/side-tree'

export default defineComponent({
  name: 'space',
  components: {
    SideTree
  },
  setup() {
    const treeIndex = ref(-1) //-1为一个都没选中

    const handleSideTreeChange = (currentIndex: number) => {
      treeIndex.value = currentIndex
    }

    return {
      treeIndex,
      handleSideTreeChange
    }
  }
})
</script>

<style scoped lang="scss">
.space-title {
  font-family: PingFang SC;
  font-weight: 500;
}
</style>
