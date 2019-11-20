<!--
 * @Author: your name
 * @Date: 2019-11-12 15:47:46
 * @LastEditTime: 2019-11-20 15:04:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/home/home.vue
 -->
<template>
  <div class="bg-51afff">
    <p class="f-s-28">{{ title }}</p>
    <p class="f-w-900 color-ebae1c">用户信息{{ getUserInfor }}</p>
    <el-button @click="jumpAbout">点击我</el-button>
    <Pagination
      :pageSize="pageSize"
      :pageNum="pageNum"
      :totalCount="totalCount"
      @pageBar="getListsRequest"
    ></Pagination>
  </div>
</template>

<script lang="ts">
  import { Getter, Action, Mutation } from "vuex-class";
  import { Component, Vue } from "vue-property-decorator";
  import Pagination from "@/components/pagination/pagination.vue";
  interface UserInfor {
    name: string;
    age: number;
  }
  @Component({
    components: {
      Pagination,
    },
  })
  export default class Home extends Vue {
    // @State userInfor!: UserInfor
    @Getter getUserInfor!: UserInfor;
    @Mutation changeUserInfor!: Function;
    @Action aleartUserInfor!: Function;
    private title: string = "这里是首页!";
    private pageSize: number = 20;
    private pageNum: number = 1;
    private totalCount: number = 1000;
    private jumpAbout(): void {
      this.$router.push({ name: "about" });
    }
    private async getListsRequest() {
      console.info("请求函数");
    }
    created(): void {
      console.info("获取用户信息");
      console.info(this.getUserInfor);
      // const value = true;
      //同步变更用户基本信息
      // this.changeUserInfor(value)
      //异步变更
      // this.aleartUserInfor(value);
    }
    mounted(): void {
      this.getListsRequest();
    }
  }
</script>

<style lang="less" scoped></style>
<style>
  @import "../../assets/css/atom/bg/bg.css";
  @import "../../assets/css/atom/color/color.css";
  @import "../../assets/css/atom/font/font.css";
</style>
