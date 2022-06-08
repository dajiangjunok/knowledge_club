<template>
  <i class="iconfont iconyonghuming" :class="icon"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
})
</script>
