/*
 * @Author: your name
 * @Date: 2019-11-21 11:15:55
 * @LastEditTime: 2019-11-21 11:15:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ts-vue/src/interface/home/home.ts
 */
export interface LoginResponse {
  resultCode: number;
  msg: string;
  data: {
    token: string;
    name: string;
  };
}
