// pages/content/content.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    currentTab: "0",
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    screenHeight: 5,
    px2rpx: app.globalData.px2rpx,
    roomList: [
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/6yRMZtrNugBrTwhI9fJ2bDt.mkcDypWmZXMONY9UVsw!/b/dLYAAAAAAAAA&bo=bgU4BAAAAAADB3U!&rf=viewer_4' },
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/q0NPBbQ.faCSpM*YIekKsU0dlJFlIKNhbnNNDMQN.FE!/b/dDUBAAAAAAAA&bo=bgU4BAAAAAADB3U!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/hHWV36o2K2nuCrTV3A9uhaO1YUWDxxjFjHI1Rt2LlA4!/b/dL4AAAAAAAAA&bo=bgU4BAAAAAADZxU!&rf=viewer_4' },
    ]
  },

  /**
   * Lifecycle function--Called when page load
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
  onLoad: function () {
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
   * Lifecycle function--Called when page is initially srendered
   */
  onReady: function () {
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})