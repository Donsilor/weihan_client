
import { HTTP_REQUEST_METHOD, UPDATE_FILE_HOST } from "./constants";

export default {
  operator: {
    getlist: {
      /**接口地址 */
      url: '/operator/getlist',
      /**接口方法 */
      method: HTTP_REQUEST_METHOD.POST,
      /**请求参数 */
      param: { b: 234 },
      /**填写Token的字符串Key */
      authorization: false,
      /**虚拟服务： */
      virtual_service: true,
      /**虚拟控制器：当虚拟服务被开启的时候，请求将不会真正的发起，而是发送到这个虚拟控制器中来，由虚拟控制器模拟后端操作，从而在业务逻辑确定的情况下可以与后端同步开发 */
      virtual_controller(params) {
        return this.responseBody(params, "成功")
      }
    },
  },
  service: {
    practical: {
      task: {
        search: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
        },

        upsert: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },

        delete: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.DELETEURL,
        },

        release: {
          /**接口地址 */
          url: '/service/practical/task/release/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },
      },
      examination: {
        search: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
        },

        upsert: {
          /**接口地址 */
          url: '/service/practical/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },

        delete: {
          /**接口地址 */
          url: '/service/practical/task/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.DELETEURL,
        },

        release: {
          /**接口地址 */
          url: '/service/practical/task/release/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },
      },
      schoolReport: {
        search: {
          /**接口地址 */
          url: '/service/practical/schoolReport/$taskId',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
        },
      },
      /**竞赛*/
      competition: {
        group: {
          upsert: {
            /**接口地址 */
            url: '/service/competitionGroup',
            /**接口方法 */
            method: HTTP_REQUEST_METHOD.POST,
          },
          select: {
            /**接口地址 */
            url: '/service/competitionGroup/$taskId',
            /**接口方法 */
            method: HTTP_REQUEST_METHOD.POST,
          },
        }
      }
    }
  },
  common: {
    uiLabels: {
      /**接口地址 */
      url: '/common/uiLabels/$type',
      /**接口方法 */
      method: HTTP_REQUEST_METHOD.GET,
    }
  }
}
