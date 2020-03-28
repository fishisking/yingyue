//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //tabbar
    currentTab:0,
    tabbar: {},
    px2rpx:app.globalData.px2rpx,
    statusBarHeight: app.globalData.statusBarHeight,
    navBarHeight:app.globalData.navBarHeight,
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
    screenHeight: app.globalData.screenHeight,
    concernList:[
      {
        title:'p1',
        src:''
      },
      {
        title: 'p2',
        src:'../../images/mm2.jpg'
      },
      {
        title: 'p3',
        src:'../../images/mm3.jpg'
      },
      {
        title: 'p4',
        src:'../../images/mm4.jpg'
      },
      {
        title: 'p5',
        src:'../../images/mm5.jpg'
      }
    ],
    grides: [
      {
        
        img: 'https://m.qpic.cn/psb?/V13v0ZyH4cNwhs/*SlnnEGtAXeG24azoDaEhrHDE0fNWpJ7WYgVmt*IkiY!/b/dMAAAAAAAAAA&bo=ZQSmAgAAAAARB*U!&rf=viewer_4',
        title: '',
        spec: '1kg',
        price: '6.00',
        orig: '7.00',
        stock: 30000
      },
      {
        img: 'http://b198.photo.store.qq.com/psb?/V13v0ZyH1uXQG8/eRUiyG5.iSNR9T5FLgCyh3GfsDoz.KmjLTLOuqsYmI4!/b/dMV2B3Z7PgAA&bo=RAL0AEQC9AAFFzQ!&rf=viewer_4',
        title: '',
        spec: '1kg',
        price: 6.00,
        orig: 7.00,
        stock: 30000
      },
      {
        img: 'http://b186.photo.store.qq.com/psb?/V13v0ZyH1uXQG8/bgeOT*bRfzlTIgpzUktu5YIWpWOOD1G8aHAA8P5Ugdw!/b/dH8r626uEQAA&bo=bwNYAm8DWAIFFzQ!&rf=viewer_4',
        title: '',
        spec: '1kg',
        price: 6.00,
        orig: 7.00,
        stock: 30000
      },
      {
        img: 'https://b128.photo.store.qq.com/psb?/V13v0ZyH4LCgn5/9vYkI4jLhU2LOTYZOZZ1JaRPSKYVIlvDTj8QH0MhYmE!/b/dE9aTkx.LAAA&bo=9AFNAQAAAAABB5k!&rf=viewer_4',
        title: '',
        spec: '1kg',
        price: 6.00,
        orig: 7.00,
        stock: 30000
      },
      {
        img: 'http://b187.photo.store.qq.com/psb?/V13v0ZyH1uXQG8/jJQB0Tkb*oDsAQiOG39LkWsGQZ9AV..q1BtFyLhG2rs!/b/dNmSd2.WOQAA&bo=mgOAAugDtgIFGH8!&rf=viewer_4',
        title: '',
        spec: '1kg',
        price: 6.00,
        orig: 7.00,
        stock: 30000
      },
    
     
    ]
  },
  onGetSystemInfo:function(){

  },
  goToContentPage:function(e){
    wx.navigateTo({
      url: '../index/content/content',
    })
  },
  openSearch:function(e){
    wx.navigateTo({
      url: '../index/search/search',
    })
  },
  clickTab:function(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  onReady:function(){
    wx.hideTabBar();
  },
  onLoad: function (res) {
    wx.hideTabBar();
   app.editTabbar();   
    this.setData({
      titleBarHeight: app.globalData.titleBarHeight,
      statusBarHeight: app.globalData.statusBarHeight
    })
   wx.getSystemInfo({
     success: function(res) {
       console.log(res)
     },
   })
  },

})
