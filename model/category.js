/*
 * @author huhong
 * @e-mail 506291685@qq.com
 * created in 2020/12/10 22:05
 */


import {Http} from "../utils/http";

class Category {

    static async getGridCategory() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Category
}