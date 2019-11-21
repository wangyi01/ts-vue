/*
 * @Author: wangyi
 * @Date: 2019-11-21 14:24:56
 * @LastEditTime: 2019-11-21 14:26:17
 * @LastEditors: Please set LastEditors
 * @Description: message
 * @FilePath: /ts-vue/src/util/messageBox.ts
 */
import { Message } from "element-ui";
export enum Type {
  Success = "success",
  Warning = "warning",
}
export class MessageBounced {
  public constructor(public msgText: string, public msgType: Type) {
    this.msgText = msgText;
    this.msgType = msgType;
  }
  windowBox() {
    Message({
      message: this.msgText,
      type: this.msgType,
    });
  }
}
