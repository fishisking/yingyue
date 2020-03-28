//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();
  
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    const vm = this
    wx.getSystemInfo({
      success: function (res) {
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        vm.globalData.statusBarHeight = res.statusBarHeight
        vm.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight
      },
      failure() {
        vm.globalData.statusBarHeight = 0
        vm.globalData.titleBarHeight = 0
      }
    })
  },
  onReady: function () {
    const vm = this
    vm.setData({
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight
    })
  },
  
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
        //适配IphoneX++++++++
        var model = res.model
        if (model.search('iPhone X') != -1) {
          t.globalData.isIphoneX = true;
        } else {
          t.globalData.isIphoneX = false;
        }
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;

    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);


    // if(pagePath.indexOf('/') != 0){
    //   pagePath = '/' + pagePath;
    // } 

    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    // isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    isIphoneX:false,
    systemInfo: null,//客户端设备信息
    userInfo: null,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
    navBarHeight: wx.getSystemInfoSync()['screenHeight'] - wx.getSystemInfoSync()['windowHeight'],
    px2rpx: 750 / wx.getSystemInfoSync()['windowWidth'],
    tabBar: {
      "backgroundColor": "#F2F2F2",
      "color": "#CDCDCD",
      "selectedColor": "#4074DD",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "icon/home.png",
          "selectedIconPath": "icon/home_sl.png",
          "text": "主页"
        },
        {
          "pagePath": "/pages/market/market",
          "iconPath": "icon/market.png",
          "selectedIconPath": "icon/market_sl.png",
          "text": "服务"
        },
        {
          "pagePath": "/pages/release/release",
          "iconPath": "icon/release.png",
          "isSpecial": true,
          // "text":"发布"
        },
        {
          "pagePath": "/pages/message/message",
          "iconPath": "icon/message.png",
          "selectedIconPath": "icon/message_sl.png",
          "text": "消息"
        },
        {
          "pagePath": "/pages/userPage/index",
          "iconPath": "icon/mine.png",
          "selectedIconPath": "icon/mine_sl.png",
          "text": "我的"
        }
      ]
    }
  }
})