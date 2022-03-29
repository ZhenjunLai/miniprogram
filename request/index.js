/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-23 23:32:55
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-29 23:01:21
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /miniprogram/request/index.js
 */

export const request = (params) => {
  return new Promise((resolve, reject) => {
    let baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}
