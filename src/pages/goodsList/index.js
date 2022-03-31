/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-21 23:20:01
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-31 23:45:01
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /miniprogram/src/pages/goodsList/index.js
 */
// src/pages/goodsList/index.js
import { request } from '../../../request/index.js'
import regeneratorRuntime from '../../../lib/regenerator/packages/runtime/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabsList: [
      {
        id: 0,
        value: '综合',
        isActive: true,
      },
      {
        id: 1,
        value: '销量',
        isActive: false,
      },
      {
        id: 2,
        value: '价格',
        isActive: false,
      },
    ],
    goodsList: [],
  },

  queryParams: {
    query: '',
    cid: '',
    pageNum: 1,
    pagesize: 10,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryParams.cid = options.cid
    this.getGoodsList()
  },

  async getGoodsList() {
    let res = await request({
      url: '/goods/search',
      data: this.queryParams,
    }).catch((e) => {
      console.log('getGoodsList error ')
    })

    console.log('getGoodsList res = ', res.data.message)
    this.setData({
      goodsList: res.data.message.goods,
    })
  },

  handleBindtapsItemChange(e) {
    const { index } = e.detail
    const { tabsList } = this.data
    tabsList.forEach((item, idx) => {
      idx === index ? (item.isActive = true) : (item.isActive = false)
    })
    this.setData({
      tabsList,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
