/*
 * @Author: wangyi
 * @Date: 2019-11-12 15:38:12
 * @LastEditTime: 2019-11-20 09:41:26
 * @LastEditors: Please set LastEditors
 * @Description: router
 * @FilePath: /project/src/router.ts
 */
import Vue from "vue";
import Router from "vue-router";
import homeIndex from "@/views/home/home.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "*",
      component: homeIndex,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName:"about" */ "./views/about/about.vue"),
    },
  ],
});
