// pages/userPage/photographerOrder/photographerOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    pagenum: 0,

    /**
   * 右上角标签
   */
    replyInfo: 1,
    payInfo: 1,
    takingpictureInfo: 1,
    handingpictureInfo: 1,
    feedbackInfo: 1,


    orderList: [{
      imgUrl: "http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/PGNilWMk7J8.On2P.04WqnwN5HUZ*MbRLrpdMvq608A!/b/dL8AAAAAAAAA&bo=3wHZAgAAAAARFyU!&rf=viewer_4",
      objecthead: "./images/seahorse.png",
      objectname: "徐成川",
      status: "待回复",
      ordername: "写真套系A",
      style: "清新",
      price: 600.00,
      date: "2019-05-25",
      time: null
    },
    {
      imgUrl: "https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/LWr4JmlEEbndmlq9UYuX1JKIGW0vCwUmRCB6lvWqBXw!/b/dL8AAAAAAAAA&bo=2AHWAgAAAAARBz0!&rf=viewer_4",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "./images/seahorse.png",
      status: "待交片",
      ordername: "女王照(单人照)",
      style: "天生合群-四宫格",
      price: 569.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      imgUrl: "http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/PGNilWMk7J8.On2P.04WqnwN5HUZ*MbRLrpdMvq608A!/b/dL8AAAAAAAAA&bo=3wHZAgAAAAARFyU!&rf=viewer_4",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "./images/seahorse.png",
      status: "待拍摄",
      ordername: "女王照(单人照)",
      style: "神秘莫测",
      price: 399.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      imgUrl: "http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/PGNilWMk7J8.On2P.04WqnwN5HUZ*MbRLrpdMvq608A!/b/dL8AAAAAAAAA&bo=3wHZAgAAAAARFyU!&rf=viewer_4",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "./images/seahorse.png",
      status: "售后",
      ordername: "女王照(单人照)",
      style: "天生合群-四宫格",
      price: 569.00,
      date: "2019-05-25",
      time: "14:00"
    },
    {
      imgUrl: "http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/PGNilWMk7J8.On2P.04WqnwN5HUZ*MbRLrpdMvq608A!/b/dL8AAAAAAAAA&bo=3wHZAgAAAAARFyU!&rf=viewer_4",
      objectname: "海马体照相馆(银泰城店)",
      objecthead: "./images/seahorse.png",
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
      pagenum: options.pagenum
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
  }
})