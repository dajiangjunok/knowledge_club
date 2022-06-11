<template>
  <div class="banner">
    <div class="left">
      <!-- <span class="title">mediinfo 知识库</span> -->
      <img src="~@/assets/img/logo_white.png" alt="logo" />
    </div>
    <div class="center">
      <el-input
        v-model="searchValue"
        placeholder="请输入关键词"
        class="search-input"
        clearable
        @change="handleChangeSearch"
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
import { useLinkSearch } from './hooks/useLinkSearch'

export default defineComponent({
  name: 'Banner',

  components: {
    NavAvatar
  },
  setup() {
    const { searchValue } = useSearch()

    const { handleChangeSearch } = useLinkSearch()

    return {
      searchValue,
      handleChangeSearch
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

  .center {
    flex: 7;
  }
  .left,
  .right {
    flex: 2;
    padding: 0 10px;
    position: relative;
    top: -40px;
  }

  .right {
    display: flex;
    justify-content: end;
  }

  & > .left .title {
    font-size: 20px;
    color: $white;
  }

  .search-input {
    height: 48px;
    // width: 746px;
    width: 100%;

    ::v-deep .el-input__wrapper {
      border-radius: 48px;
      background-color: $grey;
    }
  }
}
</style>
