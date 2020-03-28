const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    isIphoneX: app.globalData.isIphoneX,
    px2rpx: app.globalData.px2rpx,
    roomList: [
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/lsl2iMhlr9.Sur0xmjUS8MzejWx1X6JkELGhO1ydM8w!/b/dL8AAAAAAAAA&bo=EAkTBAAAAAADByw!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/Ur9BnOY73rmtG2XvL.5Cc6g82hQy4mBkZWkMPMBpdz4!/b/dFMBAAAAAAAA&bo=EAkSBAAAAAADh60!&rf=viewer_4' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
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