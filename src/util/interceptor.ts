/*
 * @Author: wangyi
 * @Date: 2019-08-07 11:41:26
 * @LastEditTime: 2019-11-21 14:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-vue/src/util/interceptor.ts
 */
import axios, { AxiosRequestConfig } from "axios";
import { MessageBounced, Type } from "@/util/messageBox";
const service = axios.create({
  baseURL: process.env.BASE_URL,
});
axios.defaults.headers.post["Content-Type"] = "application/json";
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  error => {
    return error;
  },
);
service.interceptors.response.use(
  response => {
    // 除code === 0 ，所有信息提示warning
    return response;
  },
  error => {
    return error;
  },
);
export default service;
