// pages/content/content.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    navH:app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    isIphoneX: app.globalData.isIphoneX,
    imgList: [
      {
        title: 'p1',
        src: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/PSpBU*qIof9d*5MBfhQOZAItCr5DZ3XPJ45iaKNU9Vc!/b/dEkBAAAAAAAA&bo=ZQScAgAAAAARB88!&rf=viewer_4'
      },
      {
        title: 'p2',
        src: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/*SlnnEGtAXeG24azoDaEhrHDE0fNWpJ7WYgVmt*IkiY!/b/dMAAAAAAAAAA&bo=ZQSmAgAAAAARF.U!&rf=viewer_4'
      },
      {
        title: 'p3',
        src: 'http://m.qpic.cn/psb?/V13v0ZyH4cNwhs/8C1exJbsrG6BJAFh6DEJJe3gOESJ1dd7NljDTfIErus!/b/dAYBAAAAAAAA&bo=OASwBQAAAAARJ5k!&rf=viewer_4'
      }
    ],
    love:false,
    star:false
  },
  goToUser: function (e) {
    wx.navigateTo({
      url: '/pages/market/Usercontent/content',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
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

  },
  changeStarIcon:function(){
    var star = this.data.star;
    if (star == true) {
      star = false;
    }
    else {
      star = true;
    }
    this.setData({
      star: star // 改变状态
    })
  },
  changeLoveIcon:function(){
    var love = this.data.love;
    if (love == true) {
      love = false;
    }
    else {
      love = true;
    }
    this.setData({
      love: love // 改变状态
    })
  },
  openCommentPage:function(){
    wx.navigateTo({
      url: '../content/comment/comment',
    })
  }
})