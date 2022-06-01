<template>
  <div class="avatar">
    <el-avatar :size="20" :src="avatarUri" />
    <el-dropdown>
      <span class="avatar-dropdown">
        <span class="name">{{ user.name }}</span>
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <slot>
            <el-dropdown-item @click="onLinkMine">
              <span><i class="iconfont iconyonghuming"></i> 个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item @click="onLinkManage">
              <span><i class="iconfont iconyonghuming"></i> 后台管理</span>
            </el-dropdown-item>
            <el-dropdown-item @click="onLogout">
              <span><i class="iconfont iconyonghuming"></i> 退出</span>
            </el-dropdown-item>
          </slot>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

import { useAuthStore } from '@/store/auth'

export default defineComponent({
  name: 'Avatar',
  emits: ['onLinkMine', 'onLinkManage', 'onLogout'],
  components: {
    ArrowDown
  },
  props: {
    avatarUri: {
      type: String,
      default:
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  setup(props, { emit }) {
    const { user } = useAuthStore()

    // 跳转个人中心
    const onLinkMine = (): void => {
      emit('onLinkMine')
    }
    // 跳转后台管理
    const onLinkManage = (): void => {
      emit('onLinkManage')
    }
    // 退出
    const onLogout = (): void => {
      emit('onLogout')
    }

    return {
      user,
      onLinkMine,
      onLinkManage,
      onLogout
    }
  }
})
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  justify-content: start;
  align-items: center;

  .avatar-dropdown {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 8px;
    cursor: pointer;
  }
}
</style>
