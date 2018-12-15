"use strict"

import { Toast } from "mint-ui";
// 公共方法


/** toast提示 */
export function toast(info) {
    let obj = {
        message: '提示',
        duration: 2000,
        position: 'bottom'
    };
    if (typeof (info) == 'object') {
        obj = info;
        info.duration = 2000;
    } else if (typeof (info) == 'string') {
        obj.message = info;
    }
    return Toast(obj);
}