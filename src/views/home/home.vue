<!--
 * @Author: your name
 * @Date: 2019-11-12 15:47:46
 * @LastEditTime: 2019-11-19 21:44:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/home/home.vue
 -->
<template>
  <div>
    <p>{{ title }}</p>
    <p>用户信息{{ getUserInfor }}</p>
    <!-- <button @click="click">点击我</button> -->
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
    <Pagination
      :pageSize="pageSize"
      :pageNum="pageNum"
      :totalCount="totalCount"
    ></Pagination>
  </div>
</template>

<script lang="ts">
  import { Getter, Action, Mutation } from "vuex-class";
  import { Component, Vue } from "vue-property-decorator";
  import Pagination from "@/components/pagination/pagination.vue";
  import { Lists, C, advertisersListsResponse, A } from "@/interface/home/home";
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
    private title = "这里是首页!";
    private pageSize = 20;
    private pageNum = 1;
    private totalCount = 1000;
    private list: Lists[] = [
      { name: "小王", age: 13 },
      { name: "小王", age: 13 },
      { name: "小王", age: 13 },
      { name: "小王", age: 13 },
      { name: "小王", age: 13 },
    ];
    // private click(): void {
    //   console.info("点击了我");
    //   this.$router.push({ name: "about" });
    //   console.info(this.getUserInfor);
    // }
    created(): void {
      console.info("获取用户信息");
      console.info(this.getUserInfor);
      // const value = true;
      //同步变更用户基本信息
      // this.changeUserInfor(value)
      //异步变更
      // this.aleartUserInfor(value);
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/global.less";
</style>
<style>
  /* @import "../../assets/css/cssnext.css"; */
</style>
