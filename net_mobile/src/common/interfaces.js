'use strict'
// 服务器接口列表
export const methods = {
    get: 'get',
    post: 'post'
}
export default {
    // 登录
    user: {
        // 登录
        login: {
            url: '/studentClient/students/sso',
            method: methods.post,
            data: {}
        },
        // 验证token
        checkToken:{
            url:'/studentClient/students/checkToken',
            method:methods.post,
            data:{}
        },
        // 登出
        loginout:{
            url:'/studentClient/students/loginout',
            method:methods.post,
            data:{}
        },
        // 修改密码        
        changePassWord:{
            url:'/studentClient/students/changePassWord',
            method:methods.post,
            data:{}
        },
        // 激活
        activate: {
            url: '/studentClient/students/activate',
            method: methods.post,
            data: {}
        },
        //获取学生信息
        getInfo: {
            url: '/studentClient/students/',
            method: methods.get,
            data: {}
        },
        // 找回密码
        findPassword: {
            url: '/studentClient/students/forgetPasswd',
            method: methods.post,
            data: {}
        }
    },
    file: {
        // 获取已学习的课件列表
        getHasCourseWare:{
          url:'/studentClient/getHasSeeCourse',
          method:methods.get,
          data:{}  
        },
        // 获取课件列表
        getCoursewares: {
            url: '/studentClient/coursewares',
            method: methods.get,
            data: {}
        },
        // 获取课件详细信息,:id
        getCoursewaresInfo: {
            url: '/studentClient/coursewares/',
            method: methods.get,
            data: {}
        },
    },
    video: {
        // 获取视频列表
        getVideos: {
            url: '/studentClient/videos',
            method: methods.get,
            // 前三个参数，page起始页码，countbypage一页几条
            data: { oneClassId: '', twoClassId: '', threeClassId: '', page: '', countByPage: '' }
        },
        // 获取视频列表
        getVideoInfo: {
            url: '/studentClient/videos/',
            method: methods.get,
            // 前三个参数，page起始页码，countbypage一页几条
            data: {}
        },
        // 获取文件列表（暂时不用）
        getFilesList: {
            url: '/service/storages',
            method: methods.get,
            data: {}
        },
        // 获得视频文件
        getFileByName: {
            url: '/static/',
            method: methods.get,
            data: {}
        }
    },
    other: {
        // 获取数据字典
        getDictionaries: {
            url: '/common/uiLabels/',
            method: methods.get,
            data: {}
        }
    }
}