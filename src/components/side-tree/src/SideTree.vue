<template>
  <div class="side-tree">
    <div class="main" :class="{ active: isShowSlip }" @click="handleRoom">
      <div class="icon">
        <div class="icon-container">
          <Picture style="width: 2em; height: 2em; margin: 0 auto" />
        </div>
      </div>
      <div class="content">
        <p class="title">产品研发</p>
        <div class="desc">
          <span>总数：67</span>
          <i class="partition">|</i>
          <span>未读：11</span>
        </div>
      </div>
      <div class="more" @click.stop>
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
    <div class="slip" v-show="isShowSlip">
      <el-tree
        :data="treeData"
        @node-click="handleNodeClick"
        :props="{ class: customNodeClass }"
      >
        <template #default="{ node, data }">
          <i
            class="margin-right-4 iconfont color-primary"
            :class="treeClass(data)"
          ></i>
          <span>{{ node.label }}</span>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Picture } from '@element-plus/icons-vue'
import { useTree } from './hooks/useTree'

export default defineComponent({
  name: 'SideTree',
  components: {
    Picture
  },
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
    const isShowSlip = ref(false)

    const handleRoom = () => {
      isShowSlip.value = !isShowSlip.value
    }

    const { treeData, customNodeClass, treeClass, handleNodeClick } = useTree()

    return {
      isShowSlip,
      handleRoom,
      treeData,
      handleNodeClick,
      customNodeClass,
      treeClass
    }
  }
})
</script>

<style scoped lang="scss">
@import '~@/assets/css/variables.scss';

.side-tree {
  margin-bottom: 12px;
  & > .main {
    margin-bottom: 6px;
    padding: 10px 16px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active {
      background-color: #e6f3ff;
      border: 1px solid #e6f3ff;
    }

    & > .icon {
      margin-right: 16px;
      & > .icon-container {
        display: flex;
        align-items: center;
        width: 38px;
        height: 38px;
        border-radius: 6px;
        font-size: 14px;
        color: #fff;
        background-image: linear-gradient(159.93deg, #8fc6fe 0%, #0080ff 100%);
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
  ::v-deep .el-tree-node__expand-icon {
    display: none;
  }

  ::v-deep .el-tree-node__content {
    margin-bottom: 6px;

    &:hover {
      background-color: #e6f3ff;
    }
  }

  .el-tree {
    --el-tree-node-hover-bg-color: #e6f3ff;
  }

  ::v-deep .category {
    color: $color-2;
    font-size: 14px;
    font-weight: medium;
  }

  ::v-deep .folder {
    color: $color-2;
    font-size: 14px;
    font-weight: normal;
  }

  ::v-deep .file {
    color: $color-2;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
