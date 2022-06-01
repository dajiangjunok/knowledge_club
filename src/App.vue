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
    const log = `
               _ _        __
              | (_)      / _|
 _ __ ___   __| |_ _ __ | |_ ___
| '_ \` _ \\ / _\` | | '_ \\|  _/ _ \\
| | | | | | (_| | | | | | || (_) |
|_| |_| |_|\\__,_|_|_| |_|_| \\___/

    `
    console.log(log)
    return {}
  }
})
</script>
