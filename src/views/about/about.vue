<!--
 * @Author: your name
 * @Date: 2019-11-12 22:07:58
 * @LastEditTime: 2019-11-20 11:47:12
 * @LastEditors: Please set LastEditors
 * @Description: about
 * @FilePath: /project/src/views/about/about.vue
 -->
<template>
  <div class="bg-51afff">
    <p>{{ title }}</p>
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

<style lang="less" scoped>
  @import "../../assets/css/atom/bg/bg.css";
</style>
