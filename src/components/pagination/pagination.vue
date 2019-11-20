<!--
 * @Author: wangyi
 * @Date: 2019-11-19 11:00:51
 * @LastEditTime: 2019-11-20 15:02:37
 * @LastEditors: Please set LastEditors
 * @Description: pagination
 * @FilePath: /project/src/components/pagination/pagination.vue
 -->
<template>
  <div class="bg-ebae1c">
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
  import { Component, Vue, Prop, Emit } from "vue-property-decorator";
  @Component({})
  export default class Pagination extends Vue {
    @Prop() private pageSize!: number;
    @Prop() private pageNum!: number;
    @Prop() private totalCount!: number;
    @Emit("pageBar")
    private handleCurrentChange(currentPage: number): void {
      console.info(`当前第${currentPage}页`);
    }
  }
</script>

<style lang="less" scoped></style>
<style>
  @import "../../assets/css/atom/bg/bg.css";
</style>
