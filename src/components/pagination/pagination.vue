<!--
 * @Author: wangyi
 * @Date: 2019-11-19 11:00:51
 * @LastEditTime: 2019-11-19 11:28:33
 * @LastEditors: Please set LastEditors
 * @Description: pagination
 * @FilePath: /project/src/components/pagination/pagination.vue
 -->
<template>
  <div>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="totalCount"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  @Component({})
  export default class Pagination extends Vue {
    @Prop() private pageSize!: number;
    @Prop() private pageNum!: number;
    @Prop() private totalCount!: number;
    private handleCurrentChange(currentPage: number): void {
      console.info(`当前第${currentPage}页`);
    }
  }
</script>

<style lang="less" scoped></style>
