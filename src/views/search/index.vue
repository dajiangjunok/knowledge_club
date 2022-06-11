<template>
  <div class="search">
    <h1>搜索页面</h1>
    <h2>搜索关键词：{{ searchValue }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/store/layout'

export default defineComponent({
  name: 'Search',
  setup() {
    const layoutStore = useLayoutStore()
    const { searchValue } = storeToRefs(layoutStore)
    return {
      searchValue
    }
  }
})
</script>

<style scoped lang="scss"></style>
