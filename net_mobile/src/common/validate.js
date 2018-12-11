'use strict'
// 自定义扩展表单验证插件
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

Vue.use(VeeValidate);
// 配置中文
Validator.localize('zh_CN', zh);

// 自定义validate 
const dictionary = {
    zh_CN: {
        messages: {
            email: () => '请输入正确的邮箱',
            required: (field) => { if (field == 'password') { return '请再次输入新密码' } else return "请输入" + field },//参数是当前的属性
            confirmed: () => "两次输入密码不一致",
        },
        attributes: {
            email: '邮箱',
            password: '密码',
            oldpsw:'旧密码',
            name: '账号',
            username: '用户名',
            phone: '手机',
            check: '验证码',
            question: '密保答案',
            select: "选项"
        }
    }
};

Validator.localize('zh_CN', dictionary.zh_CN);
// 自定义扩展
Validator.extend('phone', {
    getMessage: field => field + '必须是11位手机号码',
    validate: value => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});