<template>
  <div class="#app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layouts/Layout.vue'

export default defineComponent({
  name: '',
  components: {
    Layout
  },
  setup() {
    return {}
  }
})
</script>
