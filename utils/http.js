/*
 * @author huhong
 * @e-mail 506291685@qq.com
 * created in 2020/12/9 23:17
 */
import {config} from "../config/config"
import {promisic} from "./conver";

class Http {

    /**
     * 发送http请求
     * @param url 统一资源定位符
     * @param data 请求参数
     * @param method 请求方法
     */
    static async request({url, data, method = 'GET'}) {
         const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}