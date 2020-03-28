const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    screenHeight: 5,
    px2rpx: app.globalData.px2rpx,
    lists:[{"name":"女王照(单人照)","type":"天生合群","price":"￥ 259.00","update":"升级体验:四宫格","date":"2019-05-02","time":"17:00"},
      { "name": "女王照(单人照)", "type": "神秘莫测", "price": "￥ 359.00", "update": "升级体验:四宫格", "date": "2019-05-04", "time": "11:00" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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