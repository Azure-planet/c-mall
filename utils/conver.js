/*
 * @author huhong
 * @e-mail 506291685@qq.com
 * created in 2020/12/9 23:36
 */

/**
 * 将wx下任意方法转换为promisic返回
 * @param func 需要转换的方法
 * @returns {function(*=): Promise<>}
 */
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res)
                },
                fail: (error) => {
                    reject(error)
                }
            })
            func(args)
        })
    }
}

export {
    promisic
}