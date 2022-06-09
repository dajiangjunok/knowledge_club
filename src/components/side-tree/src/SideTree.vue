<template>
  <div class="side-tree">
    <div class="main">
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
    <div class="slip">
      <el-tree
        :data="treeData"
        @node-click="handleNodeClick"
        :props="{ class: customNodeClass }"
      >
        <template #default="{ node }">
          <i class="iconfont" :class="treeClass(node.type)"></i>
          <span>{{ node.label }}</span>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Picture } from '@element-plus/icons-vue'

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
    interface Tree {
      label: string
      type: string
      children?: Tree[]
    }

    const treeData: Tree[] = [
      {
        label: 'HALO',
        type: 'category',
        children: [
          {
            label: '病理质控',
            type: 'folder'
          },
          {
            label: '设计规范',
            type: 'folder',
            children: [
              {
                label: '设计对照表-细节对照',
                type: 'file'
              },
              {
                label: '设计对照表-细节对照',
                type: 'file'
              }
            ]
          }
        ]
      }
    ]

    const customNodeClass = (data: Tree) => {
      switch (data.type) {
        case 'category':
          return 'category'
        case 'folder':
          return 'folder'
        case 'file':
          return 'file'
        default:
          return null
      }
    }

    const treeClass = computed((type: string) => {
      switch (type) {
        case 'category':
          return 'iconyonghuming'
        case 'folder':
          return 'iconshijian-k'
        case 'file':
          return 'iconsearch'
        default:
          return null
      }
    })

    const handleNodeClick = (treeData: Tree) => {
      console.log(treeData)
    }

    return {
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
    padding: 10px 16px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;

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
