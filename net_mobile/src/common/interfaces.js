'use strict'
// 服务器接口列表
export const methods = {
    get: 'get',
    post: 'post'
}
export default {
    // 登录
    user: {
        login: {
            /**接口地址 */
            url: '/selectAppVersion',
            /**接口方法 */
            method: methods.get,
            // 参数
            data: {}
        },
        regist: {
            url: '/v1/users/register',
            method: methods.post,
            data: {
                UserId: '',
                AccountType: '', //账户类型："admin","user"
                UserType: '',       //账户注册类别："personal"  "company"
                PhoneNo: '',
                Email: '',
                Company: '',
                Name: '',
                Password: '',
                Province: '',
                City: '',
                Category: '',
                Avatar: '',
                Enable: true,
                EnableFace: false, //是否启用人脸识别
                Balance: '',
                Profile: '',
                Addr: '',
                Notice: '',
                Tags: null,    //分类：用户题目（question）和视频课程（class）
                CreateAt: '',
                UpdateAt: ''
            }
        }
    }
}