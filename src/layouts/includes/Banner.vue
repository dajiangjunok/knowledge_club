<template>
  <div class="banner">
    <div>
      <span>banner</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.banner {
  background-color: orange;
  min-height: 135px;
  max-height: 135px;
}
</style>
