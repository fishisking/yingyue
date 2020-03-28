const app = getApp();
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
    roomList: [
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/Wo5i9Vrm0FDkqIJU7*hY2DtkFuGPDZsDU8PwmjvYCE8!/b/dL4AAAAAAAAA&bo=VQNyBAAAAAARBxA!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/KnR8nIjM4ZcSLWYpDktaY7I10y8YmHsLQGKe*Muy*oA!/b/dIMAAAAAAAAA&bo=VQNyBAAAAAARFwA!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/uT9hjvs.CiGs80e1Z4xOumaH7yMQouOBj4Pb4zZU35g!/b/dFEBAAAAAAAA&bo=VQNyBAAAAAARFwA!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/gXJFX8pg6aH0gVFbAsfZ*mtk5Tn53c5O0Orp5pMAxpY!/b/dDUBAAAAAAAA&bo=VANyBAAAAAARFwE!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/l*dm4BMsR5gdC049WiDuc1pMN2U.4GvSLPmMhLoelZk!/b/dL4AAAAAAAAA&bo=VANyBAAAAAARFwE!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/*2TbtML3rY77B*0tafRJ7UrI5mOD3SNgaIuPGg.Wt8E!/b/dFMBAAAAAAAA&bo=VANyBAAAAAARFwE!&rf=viewer_4' },
    ],
  },
  goToSubscribe: function (e) {
    wx.navigateTo({
      url: '../Subscribe/Subscribe',
    })
  },
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