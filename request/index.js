/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-23 23:32:55
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-23 23:40:51
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /miniprogram/request/index.js
 */

export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}
