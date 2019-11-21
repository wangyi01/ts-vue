/*
 * @Author: wangyi
 * @Date: 2019-11-21 11:10:37
 * @LastEditTime: 2019-11-21 11:31:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-vue/src/util/ajax.ts
 */
import service from "./interceptor";
let timer: number = 0;
export function postRequest<T>(
  _url: string,
  _data?: object,
  isThrottle: boolean = true,
): Promise<T> {
  isThrottle && clearTimeout(timer);
  return new Promise((_resolve, _reject) => {
    timer = window.setTimeout(() => {
      service.post<T>(_url, _data).then(
        res => {
          _resolve(res.data);
        },
        error => {
          _reject(error.data);
        },
      );
    }, 500);
  });
}
export function getRequest<T>(_url: string, _data?: object): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    service
      .get<T>(_url, { params: _data })
      .then(
        res => {
          resolve(res.data);
        },
        error => {
          reject(error.data);
        },
      );
  });
}
