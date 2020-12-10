/*
 * @author huhong
 * @e-mail 506291685@qq.com
 * created in 2020/12/10 19:21
 */

import {Http} from "../utils/http";

class Banner {

    static locationB = 'b-1'

    /**
     *   获取首页第一个元素
     */
    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`,
        })
    }
}

export {
    Banner
}
