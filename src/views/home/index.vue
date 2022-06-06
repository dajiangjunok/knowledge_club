<template>
  <div class="home">
    <div class="left">
      <!-- 收藏，足迹 -->
      <ul class="left-operate">
        <li>
          <i class="iconfont iconstar margin-right-8"></i>
          <span>收藏</span>
        </li>
        <li>
          <i class="iconfont iconshijian-k margin-right-8"></i>
          <span>足迹</span>
        </li>
        <li></li>
      </ul>
      <!-- 知识空间 -->
      <Space />
    </div>
    <div class="center">2</div>
    <div class="right">3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Space from './components/Space.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Space
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
@import '~@/assets/css/variables.scss';

.home {
  height: 100%;
  display: flex;
  font-size: 14px;
  color: #222222;

  & > .left {
    flex: 4;
    padding: 16px 26px;
    height: 100%;
    background-color: #fff;

    & > .left-operate li {
      padding-bottom: 12px;

      &:hover {
        color: $primary;
        cursor: pointer;
      }
    }
  }
  & > .center {
    flex: 9;
    margin: 0 14px;
  }
  & > .right {
    flex: 4;
  }
}
</style>
