/*
 * @Author: your name
 * @Date: 2019-11-21 14:48:38
 * @LastEditTime: 2019-11-21 14:51:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-vue/src/util/format.ts
 */
/**
 * @description: 日期格式转换
 * @param {string} date 日期 2019-10-10 20:12:12
 * @return: 2019/10/10 20:12:12
 */
export function dateFormat(date: string): string {
  let newString: string = "";
  newString = date.replace(/-/gi, "/");
  return newString;
}
