<!--
 * @Author: your name
 * @Date: 2019-11-12 16:46:34
 * @LastEditTime: 2019-11-18 17:27:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /project/src/views/home/components/tabs.vue
 -->
<template>
  <div>
    <p>{{ title }}{{ msg }}</p>
    <img src="../../../assets/img/1.png" alt />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  @Component({
    components: {},
  })
  export default class Tabs extends Vue {
    @Prop() public msg!: string;
    private title = "这是一个组件";
    private created(): void {
      console.info(this.msg);
    }
  }
</script>
