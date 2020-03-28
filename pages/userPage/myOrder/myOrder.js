// pages/userPage/myOrder/myOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    pagenum: 0,
    userType: 'ordinaryUser',

    /**
     * 右上角标签
     */
    replyInfo: 1,
    payInfo: 1,
    takingpictureInfo: 1,
    handingpictureInfo: 2,
    feedbackInfo: 1,


    orderList: [{
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "电子发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objecthead: "/pages/userPage/myOrder/images/photographer.png",
      objectname: "徐成川",
      status: "待回复",
      ordername: "写真套系A",
      style: "清新",
      price: 600.00,
      date: "2019-05-25",
      time: null
    }, {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "电子发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objecthead: "/pages/userPage/myOrder/images/photographer.png",
      objectname: "徐成川",
      status: "可取片",
      ordername: "写真套系A",
      style: "清新",
      price: 600.00,
      date: "2019-05-25",
      time: null
    },
    {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "由商家开具纸质发票",
      imgUrl: "/pages/userPage/myOrder/images/cover2.jpg",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "/pages/userPage/myOrder/images/seahorse.png",
      status: "待付款",
      ordername: "女王照(单人照)",
      style: "天生合群-四宫格",
      price: 569.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "由商家开具纸质发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "/pages/userPage/myOrder/images/seahorse.png",
      status: "待拍摄",
      ordername: "女王照(单人照)",
      style: "神秘莫测",
      price: 399.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "由商家开具纸质发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "/pages/userPage/myOrder/images/seahorse.png",
      status: "待取片",
      ordername: "女王照(单人照)",
      style: "天生合群-四宫格",
      price: 569.00,
      date: "2019-05-25",
      time: "14:00"
    }, {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "由商家开具纸质发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "/pages/userPage/myOrder/images/seahorse.png",
      status: "反馈结束",
      ordername: "女王照(单人照)",
      style: "神秘莫测",
      price: 399.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      orderno: "0568711231",
      ordertime: "2019-05-01 17:00:00",
      pay: "微信支付",
      note: "无",
      bill: "由商家开具纸质发票",
      imgUrl: "/pages/userPage/myOrder/images/cover1.jpg",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "/pages/userPage/myOrder/images/seahorse.png",
      status: "待反馈",
      ordername: "女王照(单人照)",
      style: "天生合群-四宫格",
      price: 569.00,
      date: "2019-05-25",
      time: "14:00"
    }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      pagenum: options.pagenum,
      userType: options.userType
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
  /**
   * 右上角标签归零
   */
  onChange: function (e) {
    console.log(e)

    if (e.detail.index == 1) {
      this.setData({
        replyInfo: null
      })
    }
    else if (e.detail.index == 2) {
      this.setData({
        payInfo: null
      })
    }
    else if (e.detail.index == 3) {
      this.setData({
        takingpictureInfo: null
      })
    }
    else if (e.detail.index == 4) {
      this.setData({
        handingpictureInfo: null
      })
    }
    else if (e.detail.index == 5) {
      this.setData({
        feedbackInfo: null
      })
    }
  },

  /**
   * 跳转详情页面
   */
  getSpecificPage: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    console.log(this.data.orderList[index])
    var order = this.data.orderList[index]

    order = JSON.stringify(order)
    console.log(order)

    wx.navigateTo({
      url: './specificOrder/specificOrder?order=' + order,
    })
  }
})