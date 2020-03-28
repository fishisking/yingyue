const app=getApp();
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
    indexroomList: [
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/R2DWunqM.P*vaoA2ZfQso4bVSTFwWMB5uzytt6i0afU!/b/dAcBAAAAAAAA&bo=6gO9AQAAAAARB2U!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/6BKdAjyMvbEtlNNhMORoZ*Gt7hEcYxZKWac7EP5ECv4!/b/dMAAAAAAAAAA&bo=6QO9AQAAAAARF3Y!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/LFN4U7FTQl*jzSnIJQ76JKIIb*hG6uSVgLnJxBgSYOQ!/b/dMUAAAAAAAAA&bo=1QO0AQAAAAARF0M!&rf=viewer_4' },
    ],
    roomList: [
      { name: '', value: '', url: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/HA*TIVfIQcRhCHwUEPnvlXXAWoTYGf*WUQY7bS..XEc!/b/dFMBAAAAAAAA&bo=2AFiAQAAAAARB4o!&rf=viewer_4' },
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/SCalqJN.Csk3HMcf6gATfZ*LFO28tcLkZ8Wjp6CT3O8!/b/dDIBAAAAAAAA&bo=3wFnAQAAAAARF5g!&rf=viewer_4' },
    ],
    roomList2: [
      { name: '', value: '', url: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/*Diqp*liHN75l4RHh1Yg3vS8NJ*qpCEX9vGcAQi284o!/b/dFMBAAAAAAAA&bo=OwNsAgAAAAARF3Y!&rf=viewer_4' }
    ],
  },
  //可选服务、活动、作品头部点击函数
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
  //预约窗口跳转
  goToSubscribe:function(e){
      wx.navigateTo({
        url: './Subscribe/Subscribe',
      })
    },
    //服务详情
  goTodetails:function(e){
    wx.navigateTo({
      url: './Servicedetails/details',
    })
  },
  //服务内容
  goTointroduce:function(e){
    wx.navigateTo({
      url: './Introduce/Introduce',
    })
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