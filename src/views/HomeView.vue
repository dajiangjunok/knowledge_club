<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ mainStore.name }}</h2>
    <el-button type="danger">你好</el-button>
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
