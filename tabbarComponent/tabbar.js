// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "pages/index/index",
            "iconPath": "icon/home.png",
            "selectedIconPath": "icon/home_sl.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/market/market",
            "iconPath": "icon/market.png",
            "selectedIconPath": "icon/market_sl.png",
            "text": "市场"
          },
          {
            "pagePath": "pages/release/release",
            "iconPath": "icon/release.png",
            "isSpecial": true,
            // "text": "发布"
          },
          {
            "pagePath": "pages/message/message",
            "iconPath": "icon/message.png",
            "selectedIconPath": "icon/message_sl.png",
            "text": "消息"
          },
          {
            "pagePath": "pages/mine/mine",
            "iconPath": "icon/mine.png",
            "selectedIconPath": "icon/mine_sl.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
