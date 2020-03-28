const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:"0",
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    screenHeight: 5,
    px2rpx: app.globalData.px2rpx,
    roomList: [
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/IeAZoS6orF9znCDcTR0czCHcnIt2zD2F.Y0JwI4nbiE!/b/dEgBAAAAAAAA&bo=ZAT0AQAAAAARF7U!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/v7QCZ1f5Nw.hwbWUx5YlKel86Q1xEa6vxly8xk2no9I!/b/dL8AAAAAAAAA&bo=ZQT0AQAAAAARF7Q!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/9RMYSqeGrE5Dy6HfCILV4.MeBVkN6KgLsj673KdfmGY!/b/dL8AAAAAAAAA&bo=ZQT0AQAAAAARF7Q!&rf=viewer_4' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //服务选择函数
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  onLoad: function (options) {
    this.setData({
      screenHeight: wx.getSystemInfoSync().screenHeight
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight)
      },
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
    
  }
})