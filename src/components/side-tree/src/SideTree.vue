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
          <i class="partition">|</i>
          <span>未读：11</span>
        </div>
      </div>
      <div class="more">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="more-icon">...</i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <Icon icon="iconyonghuming" />
                Action 1</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="slip"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideTree',
  // props: {
  //   icon: {
  //     type: String,
  //     required: true
  //   },
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   totle: {
  //     type: Number,
  //     default: 0
  //   },
  //   unread: {
  //     type: Number,
  //     default: 0
  //   },
  //   treeData: {
  //     type: Object,
  //     default: () => ({})
  //   }
  // },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
@import '~@/assets/css/variables.scss';

.side-tree {
  & > .main {
    padding: 10px 16px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;

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

      & > .title {
        font-size: 16px;
        color: $color-2;
      }
    }

    & > .more {
      display: none;
      margin-left: auto;

      .more-icon {
        font-size: 18px;
        color: $primary;
      }
    }

    &:hover {
      & > .more {
        display: block;
      }
    }
  }

  .desc {
    margin-top: 4px;
    font-size: 12px;
    color: $color-6;
    font-weight: 500;
  }
}
</style>
