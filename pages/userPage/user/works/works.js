// pages/index/works/works.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    workslist: [{
      imgUrl: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/Y*27719Ea.Jx8pFkiJQVfyL4m13Y3CMxwLwn6XCKb*k!/b/dDABAAAAAAAA&bo=tQEcAQAAAAARB5k!&rf=viewer_4',
      date:'4月30日'
    }, {
        imgUrl: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/CWDS4SolHf1sXgFPEw7MCZr0Go6E5vDNlY2M*HfSHPg!/b/dL8AAAAAAAAA&bo=GwJaAQAAAAARF2I!&rf=viewer_4',
      date: '4月30日'
    }, {
        imgUrl: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/NPy26zoLeg21V48Tduj6tj.WxpjNhd2m5mCZzOAHoLM!/b/dLYAAAAAAAAA&bo=HAI9AQAAAAARFwI!&rf=viewer_4',
      date: '4月30日'
    },{
        imgUrl: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/d1nidy0gLBPrPQVTE8GdcNro4BdwXiqdLo8MWwqeCU8!/b/dMUAAAAAAAAA&bo=GgJEAQAAAAARF30!&rf=viewer_4',
      date: '4月30日'
    }]
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