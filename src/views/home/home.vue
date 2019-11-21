<!--
 * @Author: your name
 * @Date: 2019-11-12 15:47:46
 * @LastEditTime: 2019-11-21 15:10:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/home/home.vue
 -->
<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
  import { Getter, Action, Mutation } from "vuex-class";
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class Home extends Vue {
    private title: string = "这里是首页";
  }
</script>

<style lang="less" scoped></style>
<style></style>
