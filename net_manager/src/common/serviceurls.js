
import { HTTP_REQUEST_METHOD, UPDATE_FILE_HOST } from "./constants";

export default {
  // operator: {
  //   getlist: {
  //     /**接口地址 */
  //     url: '/operator/getlist',
  //     /**接口方法 */
  //     method: HTTP_REQUEST_METHOD.POST,
  //     /**请求参数 */
  //     param: { b: 234 },
  //     /**填写Token的字符串Key */
  //     authorization: false,
  //     /**虚拟服务： */
  //     virtual_service: true,
  //     /**虚拟控制器：当虚拟服务被开启的时候，请求将不会真正的发起，而是发送到这个虚拟控制器中来，由虚拟控制器模拟后端操作，从而在业务逻辑确定的情况下可以与后端同步开发 */
  //     virtual_controller(params) {
  //       return this.responseBody(params, "成功")
  //     }
  //   },
  // },
  service: {
    /**实操 */
    practical: {
      /**任务 */
      task: {
        search: {
          /**接口地址 */
          url: '/service/practical/task/get',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
          authorization: "token",
        },

        upsert: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
          authorization: "token"
        },

        delete: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.DELETEURL,
          authorization: "token"
        },

        release: {
          /**接口地址 */
          url: '/service/practical/task/release/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POSTURL,
          authorization: "token"
        },
      },
      /**考试 */
      examination: {
        search: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
          authorization: "token"
        },

        upsert: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
          authorization: "token"
        },

        delete: {
          /**接口地址 */
          url: '/service/practical/task/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.DELETEURL,
          authorization: "token"
        },

        release: {
          /**接口地址 */
          url: '/service/practical/task/release/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POSTURL,
          authorization: "token"
        },
      },
      /**成绩 */
      schoolReport: {
        search: {
          /**接口地址 */
          url: '/service/practical/schoolReport/$taskId',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
          authorization: "token"
        }
      },
      /**竞赛*/
      competition: {
        /**小组 */
        group: {
          upsert: {
            /**接口地址 */
            url: '/service/competitionGroup',
            /**接口方法 */
            method: HTTP_REQUEST_METHOD.POST,
            authorization: "token"
          },
          select: {
            /**接口地址 */
            url: '/service/competitionGroup/$taskId',
            /**接口方法 */
            method: HTTP_REQUEST_METHOD.POSTURL,
            authorization: "token"
          },
        }
      }
    },
    /**用户 */
    users:{
      /**登陆 */
      login:{
        /**接口地址 */
        url: '/service/users/login',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
      }
    },
    /**学校 */
    schools:{
      search:{
        /**接口地址 */
        url: '/service/schools/get',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      },
      insert:{
        /**接口地址 */
        url: '/service/schools',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      }
    },
    teachTypes:{
      search:{
        /**接口地址 */
        url: '/service/teachTypes/get',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      },
    },
    /*课程*/
    coursewares:{
      search:{
        /**接口地址 */
        url: '/service/coursewares/get',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      },
    },
    /**题库 */
    questions:{
      search:{
        /**接口地址 */
        url: '/service/questions/get',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      },
    },
    /**作业 */
    homeworks:{
      search:{
        /**接口地址 */
        url: '/service/homeworks',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.GET,
        authorization: "token"
      },
    },
    /**考试 */
    papers:{
      search:{
        /**接口地址 */
        url: '/service/papers/get',
        /**接口方法 */
        method: HTTP_REQUEST_METHOD.POST,
        authorization: "token"
      },
    }
  },
  /**公共 */
  common: {
    /**标签 */
    uiLabels: {
      /**接口地址 */
      url: '/common/uiLabels/$type',
      /**接口方法 */
      method: HTTP_REQUEST_METHOD.GETURL
    }
  }
}
