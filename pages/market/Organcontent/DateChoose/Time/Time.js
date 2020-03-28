const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    navH: app.globalData.statusBarHeight + 46,
    currentIndex: 0,
    currentTime: 0,
    timeArr: [
      { "time": "09:30", "status": "约满" },
      { "time": "10:00", "status": "约满" },
      { "time": "10:30", "status": "约满" },
      { "time": "11:00", "status": "约满" },
      { "time": "11:30", "status": "约满" },
      { "time": "12:00", "status": "约满" },
      { "time": "12:30", "status": "约满" },
      { "time": "13:00", "status": "约满" },
      { "time": "13:30", "status": "约满" },
      { "time": "14:00", "status": "约满" },
      { "time": "14:30", "status": "约满" },
      { "time": "15:00", "status": "约满" },
      { "time": "15:30", "status": "约满" },
      { "time": "16:00", "status": "约满" },
      { "time": "16:30", "status": "约满" },
      { "time": "17:00", "status": "约满" },
      { "time": "17:30", "status": "约满" },
      { "time": "18:00", "status": "约满" },
      { "time": "18:30", "status": "约满" },
    ]
  },
  //返回预约窗口
  goToSubscribe: function (e) {
    wx.navigateTo({
      url: '../../Subscribe/Subscribe',
    })
  },
  selectTime: function (event) {
    //选择时间的点击事件
    this.setData({
      currentTime: event.currentTarget.dataset.tindex
    })
    console.log(event.currentTarget.dataset.time)
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