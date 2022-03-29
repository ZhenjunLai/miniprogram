/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-19 16:56:59
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-29 23:01:46
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
      url: '/home/swiperdata',
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
      url: '/home/catitems',
      data: {},
      header: { 'content-type': 'application/json' },
    }).then((result) => {
      this.setData({
        catesList: result.data.message,
      })
    })
  },
})
