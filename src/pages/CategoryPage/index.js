// pages/CategoryPage/index.js
import { request } from '../../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftCategoryList: [],
    rigtCategoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCategoryList()
  },
  getCategoryList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      data: {},
      header: { 'content-type': 'application/json' },
    }).then(res => {
      console.log(res)
      this.setData({
        leftCategoryList: res.data.message.map(item => item.cat_name),
        rigtCategoryList: res.data.message[0].children
      })
    })
  }
})