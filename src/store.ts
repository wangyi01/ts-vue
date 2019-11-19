/*
 * @Author: your name
 * @Date: 2019-11-15 16:21:31
 * @LastEditTime: 2019-11-19 09:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/store.ts
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userInfor: {
      name: "小王",
      age: 13,
    },
  },
  //获取信息使用getters
  getters: {
    getUserInfor(state) {
      return state.userInfor;
    },
  },
  //同步调用
  mutations: {
    changeUserInfor(state, value) {
      console.info("用户基本信息");
      console.info(value);
      state.userInfor = value;
    },
  },
  //异步调用
  actions: {
    aleartUserInfor({ commit }, value) {
      commit("changeUserInfor", value);
    },
  },
});
