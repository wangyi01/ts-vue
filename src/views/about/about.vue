<!--
 * @Author: your name
 * @Date: 2019-11-12 22:07:58
 * @LastEditTime: 2019-11-20 15:19:36
 * @LastEditors: Please set LastEditors
 * @Description: about
 * @FilePath: /project/src/views/about/about.vue
 -->
<template>
  <div class="bg-e45b5a">
    <p class="b-51afff b-r-20">{{ title }}</p>
    <el-button>点击我</el-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class About extends Vue {
    private title = "关于我";
  }
</script>

<style lang="less" scoped></style>
<style>
  @import "../../assets/css/atom/bg/bg.css";
  @import "../../assets/css/atom/border/border.css";
</style>
