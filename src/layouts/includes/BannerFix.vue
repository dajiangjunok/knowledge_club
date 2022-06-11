<template>
  <div class="banner-fix">
    <div class="left">
      <span class="pointer title" @click="handleBackHome">mediinfo 知识库</span>
      <!-- <img
        class="pointer"
        src="~@/assets/img/logo_blue.png"
        alt="logo"
        @click="handleBackHome"
      /> -->
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
      <NavAvatar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavAvatar from '@/components/nav-avatar/index'

import { useSearch } from './hooks/useSearch'
import { useLinkSearch } from './hooks/useLinkSearch'
import { useBackHome } from './hooks/useBackHome'

export default defineComponent({
  name: 'BannerFix',
  components: {
    NavAvatar
  },
  setup() {
    const { searchValue } = useSearch()
    const { handleChangeSearch } = useLinkSearch()
    const { handleBackHome } = useBackHome()

    return {
      searchValue,
      handleChangeSearch,
      handleBackHome
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';

.banner-fix {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 50px;
  max-height: 50px;
  background-color: $white;

  .title {
    color: $primary;
    font-size: 20px;
  }

  .search-input {
    width: 404px;

    ::v-deep .el-input__wrapper {
      border-radius: 34px;
      background-color: $grey;
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
}
</style>
