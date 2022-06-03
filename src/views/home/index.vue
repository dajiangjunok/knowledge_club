<template>
  <div class="home">
    <ul>
      <li v-for="i in 20" :key="i">
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
