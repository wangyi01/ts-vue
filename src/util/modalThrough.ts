/*
 * @Author: wangyi
 * @Date: 2019-11-21 14:55:04
 * @LastEditTime: 2019-11-21 15:06:12
 * @LastEditors: Please set LastEditors
 * @Description: 防穿透
 * @FilePath: /ts-vue/src/util/modalThrough.ts
 */
const HTML: HTMLElement = document.getElementsByTagName("html")[0];
export function addHtmlElStyle() {
  HTML.style["overflowY"] = "hidden";
}
export function removeHtmlElStyle() {
  HTML.style["overflowY"] = "auto";
}
