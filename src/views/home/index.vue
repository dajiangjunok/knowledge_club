<template>
  <div class="home">
    <h1>首页</h1>
    <ul>
      <li v-for="i in 100" :key="i">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss"></style>
