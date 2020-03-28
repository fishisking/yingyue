const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    identity:'',
    type:'',
    style:''
  },

  //跳转函数
  goToIdentityPage: function (e) {
    wx.navigateTo({
      url: './identity/identity',
    })
  },
  goToTypePage: function (e) {
    wx.navigateTo({
      url: './type/type',
    })
  },
  goToStylePage: function (e) {
    wx.navigateTo({
      url: './style/style?type='+this.data.type
    })
  },
  goToPhotographerPage: function (e) {
    wx.navigateTo({
      url: './photographer/photographer',
    })
  },
  goToPlacePage: function (e) {
    wx.navigateTo({
      url: './place/place',
    })
  },
  goToTopicPage: function (e) {
    wx.navigateTo({
      url: './topic/topic',
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