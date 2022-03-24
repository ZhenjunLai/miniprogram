/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-19 16:56:59
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-24 22:26:16
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /miniprogram/src/pages/firstPage/index.js
 */
// pages/firstPage/index.js

import { request } from '../../../request/index.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    catesList: [],
  },
  onLoad: function (options) {
    this.getSwiperList()
    this.getCatesList()
  },
  getSwiperList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      data: {},
      header: { 'content-type': 'application/json' },
    }).then((result) => {
      this.setData({
        swiperList: result.data.message,
      })
    })
  },
  getCatesList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      data: {},
      header: { 'content-type': 'application/json' },
    }).then((result) => {
      this.setData({
        catesList: result.data.message,
      })
    })
  },
})
