
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
    practicalExamination: {
      task: {
        search: {
          /**接口地址 */
          url: '/service/practical/examination/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.GET,
        },
        
        update: {
          /**接口地址 */
          url: '/service/practical/examination/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },
        
        insert: {
          /**接口地址 */
          url: '/service/practical/examination/task',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.PUT,
        },
        
        delete: {
          /**接口地址 */
          url: '/service/practical/examination/task/$id',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.DELETEURL,
        },
        
        release: {
          /**接口地址 */
          url: '/service/practical/examination/task/release',
          /**接口方法 */
          method: HTTP_REQUEST_METHOD.POST,
        },
      }
    }
  }
}

