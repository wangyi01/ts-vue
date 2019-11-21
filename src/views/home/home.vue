<!--
 * @Author: your name
 * @Date: 2019-11-12 15:47:46
 * @LastEditTime: 2019-11-21 15:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/home/home.vue
 -->
<template>
  <div style="height:10000px;">
    <section>
      <el-input placeholder="请输入用户名" v-model="login.userName"></el-input>
      <el-input placeholder="请输入密码" v-model="login.pwd"></el-input>
      <el-button @click="confirm()">确定</el-button>
    </section>
    <p class="f-s-28">{{ title }}</p>
    <p class="f-w-900 color-ebae1c">用户信息{{ getUserInfor }}</p>
    <div class="c-fff bg-51afff" @click="jumpAbout()">点击我</div>
    <section class="pop-window" v-if="isShow">
      <div class="pop-content">safasfasfa</div>
    </section>
    <!-- <Pagination
      :pageSize="pageSize"
      :pageNum="pageNum"
      :totalCount="totalCount"
      @pageBar="getListsRequest"
    ></Pagination> -->
  </div>
</template>

<script lang="ts">
  import { Getter, Action, Mutation } from "vuex-class";
  import { Component, Vue } from "vue-property-decorator";
  import Pagination from "@/components/pagination/pagination.vue";
  import { LOGIN } from "@/api/home/home";
  import { postRequest } from "@/util/ajax";
  import { LoginResponse } from "@/interface/home/home";
  import { MessageBounced, Type } from "@/util/messageBox";
  import { addHtmlElStyle } from "@/util/modalThrough";
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
    private isShow: boolean = false;
    private login = {
      userName: "",
      pwd: "",
    };
    private jumpAbout(): void {
      this.isShow = true;
      addHtmlElStyle();
      // this.$router.push({ name: "about" });
    }
    private async confirm() {
      console.info(this.login.userName);
      console.info(this.login.pwd);
      const params = {
        userName: this.login.userName,
        userPwd: this.login.userName,
      };
      const { msg, resultCode } = await postRequest<LoginResponse>(
        LOGIN,
        params,
      );
      if (resultCode === 200) {
        new MessageBounced(msg, Type.Success).windowBox();
      }
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
      console.info(process.env.BASE_URL);
    }
  }
</script>

<style lang="less" scoped></style>
<style>
  @import "../../assets/styles/atom/bg/bg.css";
  @import "../../assets/styles/atom/color/color.css";
  @import "../../assets/styles/atom/font/font.css";
  @import "../../assets/styles/atom/pop/pop.css";
</style>
