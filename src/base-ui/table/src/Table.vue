<template>
  <div class="yj-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table v-bind="otherProps" :data="tableList" style="width: 100%">
      <template v-for="columnProp in propList" :key="columnProp.id">
        <el-table-column
          align="center"
          v-bind="columnProp"
          show-overflow-tooltip
        >
          <template #default="{ row }">
            <slot :name="columnProp.slotName" :row="row">
              {{ row[columnProp.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer">
      <div class="footer" v-if="showFooter">
        <el-pagination
          :page-size="page.pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total,sizes,prev,pager,next"
          :page-sizes="[5, 10, 20]"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'yj-table',
  props: {
    title: {
      type: String,
      default: ''
    },
    tableList: {
      type: Array,
      required: true
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    propList: {
      type: Array as PropType<any>,
      required: true
    },
    otherProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:page', 'update:page'],
  setup(props, { emit }) {
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
