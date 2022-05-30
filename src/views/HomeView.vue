<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ mainStore.name }}</h2>
    <el-button type="danger">你好</el-button>
    <el-button type="info">你好</el-button>
    <el-button type="primary">你好</el-button>
    <el-button type="success">你好</el-button>
    <h2 class="change-color">更改颜色</h2>
  </div>
</template>

<script lang="ts">
import { useMainStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    const mainStore = useMainStore()
    return {
      mainStore
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  h1 {
    color: red;
  }
}
</style>
