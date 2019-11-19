<!--
 * @Author: your name
 * @Date: 2019-11-12 22:07:58
 * @LastEditTime: 2019-11-19 16:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/about/about.vue
 -->
<template>
  <div class="color_red">
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
  @import "../../assets/css/global.less";
  .color_red {
    color: blue;
  }
</style>
