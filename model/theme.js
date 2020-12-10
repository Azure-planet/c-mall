/**
 * @author huhong
 * @e-mail 506291685@qq.com
 * created in 2020/12/9 23:00
 */

import {Http} from "../utils/http"

class Theme {

    /**
     *   获取首页第一个元素
     */
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1,t-2,t-3,t-4,t-5,t-6'
            }
        })
    }


}

export {
    Theme
}

