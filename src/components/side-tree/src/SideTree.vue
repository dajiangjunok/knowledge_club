<template>
  <div class="side-tree">
    <div class="main">
      <div class="icon">
        <i class="icon-container"></i>
      </div>
      <div class="content">
        <p class="title">产品研发</p>
        <div class="desc">
          <span>总数：67</span>
          <span>未读：11</span>
        </div>
      </div>
    </div>
    <div class="slip"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SideTree',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    totle: {
      type: Number,
      default: 0
    },
    unread: {
      type: Number,
      default: 0
    },
    treeData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.side-tree {
  padding: 10px 16px;
  border: 1px solid #ebebeb;
  border-radius: 6px;

  & > .main {
    display: flex;
    align-items: center;

    & > .icon {
      margin-right: 16px;
      & > .icon-container {
        display: inline-block;
        width: 38px;
        height: 38px;
        border-radius: 6px;
        background-color: pink;
      }
    }

    & > .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
