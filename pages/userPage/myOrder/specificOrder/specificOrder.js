// pages/userPage/myOrder/specificOrder/specificOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    order:{},
    button1text:"取 消 订 单",
    button2text:"前 往 支 付",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      order:JSON.parse(options.order)
    })
    if (JSON.parse(options.order).status == "待反馈") {
      this.setData({
        button1text: "删 除 订 单",
        button2text: "反 馈 评 价",
      })
    }
    else if (JSON.parse(options.order).status == "待反馈"){
      this.setData({
        button2text: "开 始 拍 摄"
      })
    }
    else if (JSON.parse(options.order).status == "待取片") {
      this.setData({
        button2text: "申 请 仲 裁"
      })
    }
    else if (JSON.parse(options.order).status == "可取片") {
      this.setData({
        button2text: "完 成 取 片"
      })
    }

    console.log(JSON.parse(options.order))
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

  }
})