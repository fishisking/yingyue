// pages/mine/mine.js
const app = getApp();
Page({

  data: {
    //tabbar
    currentTab: "0",
    tabbar: {},
    px2rpx: app.globalData.px2rpx,
    navH: app.globalData.statusBarHeight + 46,
    statusBarHeight: app.globalData.statusBarHeight,
    navBarHeight: app.globalData.navBarHeight,
  },
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
  clickSelTab: function (e) {
    var that = this;
    if (this.data.currentSelTab === e.target.dataset.selcurrent) {
      return false;
    } else {
      that.setData({
        currentSelTab: e.target.dataset.selcurrent,
      })
    }
  },

  //聊天界面跳转函数
  goTocontactPage: function (e) {
    wx.navigateTo({
      url: './contact/contact',
    })
  },
  //系统消息跳转函数
  goToSystemPage: function (e) {
    wx.navigateTo({
      url: './Systemmessage/sysmessage',
    })
  },

  //点赞跳转函数
  goToDianzanPage: function (e) {
    wx.navigateTo({
      url: './dianzanmessage/dianzanmessage',
    })
  },
  //评论跳转函数
  goToCommentPage: function (e) {
    wx.navigateTo({
      url: './comment/comment',
    })
  },

  //我关注的跳转函数
  goToConcernPage: function (e) {
    wx.navigateTo({
      url: './Myconcern/myconcern',
    })
  },
  onLoad: function (options) {
    app.editTabbar();
    console.log(app.globalData.px2rpx);
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
      },
    })
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})