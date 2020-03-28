const app = getApp();
Page({

  data: {
    //tabbar
    currentTab: "0",
    currentSelTab: "0",
    tabbar: {},
    px2rpx: app.globalData.px2rpx,
    statusBarHeight: app.globalData.statusBarHeight,
    navBarHeight: app.globalData.navBarHeight,
    screenHeight: 5,
  },
 //头部点击函数
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
  //筛选框点击函数
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
  //摄影师跳转函数
  goToContentPage: function (e) {
    wx.navigateTo({
      url: './Photographercontent/content',
    })
  },
  //摄影机构跳转函数
  goToOrganContentPage:function(e){
    wx.navigateTo({
      url: './Organcontent/content',
    })
  },
  //搜索跳转框
  goTosearch:function(e){
    wx.navigateTo({
      url: '/pages/index/search/search',
    })
  },
  //租赁机构跳转
  goToServiceContentPage: function (e) {
    wx.navigateTo({
      url: './Servicecontent/content',
    })
  },
  onLoad: function (res) {
    app.editTabbar();
    // console.log(app.globalData.statusBarHeight);
    // console.log(app.globalData.navBarHeight);
    console.log(app.globalData.px2rpx);
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
      },
    })
  },
  
  // switchTab: function (e) {
  //   this.setData({
  //     currentNavtab: e.currentTarget.dataset.idx
  //   });
  // }
})