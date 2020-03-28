// pages/userPage/serviceOrder/serviceOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    userType:'servicer',
    pagenum:0,

    payInfo: 1,
    completingInfo: 1,
    feedbackInfo: null,
    aftermarketInfo: null,

    orderList: [{
      imgUrl: "./images/camera.jpg",
      objecthead: "./images/leaseShop.png",
      objectname: "专业相机租赁",
      status: "待付款",
      ordername: "索尼A7M3 A73",
      style: "需押金",
      price: 10490.00,
      startdate: "2019-05-25",
      finishdate: "2019-05-25",
      serviceType:"租赁类"
    },
    {
      imgUrl: "./images/service.png",
      objectname: "专业胶片冲扫",
      objecthead: "./images/serviceShop.png",
      status: "待完成",
      ordername: "照片精修以及胶片冲扫",
      style: "数量:10",
      price: 180.00,
      date: "2019-05-28",
      serviceType: "服务类"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      pagenum: options.pagenum,
      userType:options.userType
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getspecificPage:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index
    console.log(this.data.orderList[index])
    var order = this.data.orderList[index]

    order = JSON.stringify(order)
    console.log(order)

    wx.navigateTo({
      url: './specificOrder/specificOrder?order=' + order,
    })
  },

  onChange: function (e) {
    console.log(e)

    if (e.detail.index == 1) {
      this.setData({
        payInfo: null
      })
    }
    else if (e.detail.index == 2) {
      this.setData({
        completingInfo: null
      })
    }
    else if (e.detail.index == 3) {
      this.setData({
        feedbackInfo: null
      })
    }
    else if (e.detail.index == 4) {
      this.setData({
        aftermarketInfo: null
      })
    }
  }
})