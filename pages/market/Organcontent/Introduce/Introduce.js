const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: "0",
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    screenHeight: 5,
    px2rpx: app.globalData.px2rpx,
    roomlist: [
      { "image": "../../images/icon1.png", "typename": "原片数量", "nums": "4"},
      { "image": "../../images/icon2.png", "typename": "精修数量", "nums": "1"},
      { "image": "../../images/icon3.png", "typename": "拍摄人数", "nums": "1"},
      { "image": "../../images/icon4.png", "typename": "化妆造型", "nums": "提供"},
      { "image": "../../images/icon5.png", "typename": "拍摄服装", "nums": "提供"},
      { "image": "../../images/icon6.png", "typename": "冲印输出", "nums": "1种尺寸" },
    ],
    roomlist2:[{"name":"拍摄时长","type":"2小时"},
    {"name":"拍摄组数","type":"1组"},
    {"name":"拍摄场地","type":"室内"},
    {"name":"交图天数","type":"1天内"}]
  },
  //跳转预约
  goToSubscribe: function (e) {
    wx.navigateTo({
      url: '../Subscribe/Subscribe',
    })
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