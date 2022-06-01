<template>
  <div class="banner">
    <div class="left">
      <span class="title">mediinfo 知识库</span>
    </div>
    <div class="center">
      <el-input
        v-model="searchValue"
        placeholder="请输入关键词"
        class="search-input"
        clearable
      >
        <template #prefix>
          <i class="iconfont iconshijian-k" />|&nbsp;&nbsp;
        </template>
        <template #suffix>
          <i class="iconfont iconsearch pointer" />
        </template>
      </el-input>
    </div>
    <div class="right">
      <NavAvatar color="#ffffff" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavAvatar from '@/components/nav-avatar/index'

import { useSearch } from './hooks/useSearch'

export default defineComponent({
  name: 'Banner',

  components: {
    NavAvatar
  },
  setup() {
    const { searchValue } = useSearch()

    return {
      searchValue
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0080ff;
  min-height: 135px;
  max-height: 135px;

  .left,
  .right {
    padding: 0 10px;
    position: relative;
    top: -40px;
  }

  & > .left .title {
    font-size: 20px;
    color: $white;
  }

  .search-input {
    height: 48px;
    width: 746px;

    ::v-deep .el-input__wrapper {
      border-radius: 48px;
      background-color: $grey;
    }
  }
}
</style>
