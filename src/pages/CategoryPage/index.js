/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-19 19:02:03
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-29 23:11:10
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /miniprogram/src/pages/CategoryPage/index.js
 */
// pages/CategoryPage/index.js
import { request } from '../../../request/index.js'
import regeneratorRuntime from '../../../lib/regenerator/packages/runtime/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftCategoryList: [],
    rigtCategoryList: [],
    currentIndex: 0,
    scrollTop: 0,
  },
  cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cates = wx.getStorageSync('cates')
    console.log(cates)
    if (!cates) {
      this.getCategoryList()
    } else {
      if (Date.now() - cates.time > 1000 * 10) {
        this.getCategoryList()
      } else {
        console.log('获取缓存数据 ！！')
        this.cates = cates.data
        this.setData({
          leftCategoryList: this.cates.map((item) => item.cat_name),
          rigtCategoryList: this.cates[0].children,
        })
      }
    }
  },
  async getCategoryList() {
    const res = await request({
      url: '/categories',
    }).catch((e) => {
      console.log('getCategoryList request error')
    })
    this.cates = res.data.message
    if (!this.cates.length) {
      return
    }
    wx.setStorageSync('cates', { time: Date.now(), data: this.cates })
    this.setData({
      leftCategoryList: this.cates.map((item) => item.cat_name),
      rigtCategoryList: this.cates[0].children,
    })
  },
  handleItemTap(e) {
    let index = e.target.dataset.index
    this.setData({
      scrollTop: 0,
      currentIndex: index,
      rigtCategoryList: this.cates[index].children,
    })
  },
})
