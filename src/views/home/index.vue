<template>
  <div class="home">
    <div class="left">
      <!-- 收藏，足迹 -->
    </div>
    <div class="center">2</div>
    <div class="right">3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;

  & > .left {
    flex: 4;
    height: 100%;
    background-color: #fff;
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
