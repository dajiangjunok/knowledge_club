<template>
  <div class="nav-avatar">
    <YJAvatar
      @onLinkMine="onLinkMine"
      @onLinkManage="onLinkManage"
      @onLogout="onLogout"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import YJAvatar from '@/base-ui/avatar/index'

import auth from '@/lib/auth'

export default defineComponent({
  name: 'NavAvatar',
  components: {
    YJAvatar
  },
  setup() {
    // 跳转个人中心
    const onLinkMine = (): void => {
      console.log('跳转个人中心')
    }
    // 跳转后台管理
    const onLinkManage = (): void => {
      console.log('跳转后台管理')
    }
    // 退出
    const onLogout = (): void => {
      auth.logout()
    }

    return {
      onLinkMine,
      onLinkManage,
      onLogout
    }
  }
})
</script>

<style scoped lang="scss"></style>
