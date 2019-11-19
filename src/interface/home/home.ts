/*
 * @Author: your name
 * @Date: 2019-11-19 17:08:05
 * @LastEditTime: 2019-11-19 21:44:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/src/interface/home/home.ts
 */
export interface Lists {
  name: string;
  age: number;
}
export interface AdvertisersListsResponse {
  resultCode: number;
  data: {
    pages: number;
    total: number;
  };
}
export interface C {
  type: number;
}
export interface A {
  type: number;
}
