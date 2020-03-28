// pages/content/comment/comment.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    comments:[
      {
        id:'许问好',
        date:'04-17',
        time:'11:20',
        avatar:'../../images/3.jpg',
        content:'小姐姐,请问这里是西溪湿地的哪里啊？',
        like:15,
        subComments:[
          {
            id: '许问好',
            date: '04-17',
            time: '11:20',
            avatar: '../../images/3.jpg',
            content: '小姐姐,请问这里是西溪湿地的哪里啊？',
            like: 15,
          }
        ]
      }
      
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  }
})