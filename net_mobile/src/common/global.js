'use strict'
// 全局变量
export default {
    token: null,
    userId: null,
    onLineTime: null,//账号登录失效时长
    userinfo: {
    },
    //  当前选中的目录
    menu: 0,
    dicts: {
        // 密保字典
        securityQuestions: 'securityQuestions',
    },
    // 加载遮罩超时时间
    timeout: 10000,
}