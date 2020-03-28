//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show:false,
    currentTab: "0",
    tabbar: {},
    px2rpx: app.globalData.px2rpx,
    navH: app.globalData.statusBarHeight + 46,
    statusBarHeight: app.globalData.statusBarHeight,
    navBarHeight: app.globalData.navBarHeight,

    // 用户类型 用来控制页面显示 有 ordinaUser photographer servicer photographer_servicer 四种
    userType: 'ordinaryUser',


    //更改用户类型
    init: [
      {
        name: '普通用户',
        select:'ordinaryUser'
      },
      {
        name: '摄影师',
        select: 'photographer'
      },
      {
        name: '摄影机构',
        select: 'photographer_servicer'
      },
      {
        name: '服务商',
        select: 'servicer'
      }
    ],
  

    //摄影师的订单
    array_photographer_box: [{
      imgUrl: '/images/photographer/reply.png',
      title: '待回复',
      pagenum: 1,
    }, {
      imgUrl: '/images/photographer/takingPicture.png',
      title: '待拍摄',
      pagenum: 2,
    }, {
      imgUrl: '/images/photographer/handingPicture.png',
      title: '待交片',
        pagenum: 3,
    }, {
      imgUrl: '/images/photographer/feedback.png',
      title: '待反馈',
        pagenum: 4,
    }, {
      imgUrl: '/images/photographer/aftermarket.png',
      title: '售后',
        pagenum: 5,
    }],


    //我的订单
    array_my_box: [{
      imgUrl: '/images/normalUser/reply.png',
      title: '待回复',
      go: 'reply',
      pagenum:  1,
    }, {
        imgUrl: '/images/normalUser/pay.png',
        title: '待付款',
        go: 'pay',
        pagenum: 2,
      }, {
        imgUrl: '/images/normalUser/takingPicture.png',
        title: '待拍摄',
        go: 'takingPicture',
        pagenum: 3,
      }, {
        imgUrl: '/images/normalUser/ready.png',
        title: '待取片',
        go: 'ready',
        pagenum: 4,
      }, {
        imgUrl: '/images/normalUser/feedback.png',
        title: '待反馈',
        go: 'feedback',
        pagenum: 5,
      }],
      
      //相关服务订单
    array_service_box: [{
      imgUrl: '/images/service/completing.png',
      title: '待完成',
      go: 'completingS',
      pagenum:2,
      pagenum2:1,
    }, {
        imgUrl: '/images/service/feedback.png',
        title: '待反馈',
        go: 'feedbackS',
        pagenum: 3,
        pagenum2: 2,
    }, {
        imgUrl: '/images/service/aftermarket.png',
        title: '售后',
        go: 'aftermarketS',
        pagenum: 4,
        pagenum2: 3,
    }],


    //选择框： icon地址，选择名
    //go值为函数选择器
    array: [{
      imgUrl: '/images/collect.png',
      title: '收藏',
      go:'collect'
    }, {
      imgUrl: '/images/card.png',
      title: '卡券',
      go: 'card'
    }, {
      imgUrl: '/images/watermark.png',
      title: '个性水印',
      go: 'watermark'
    }, {
      imgUrl: '/images/attestation.png',
      title: '认证',
      go: 'attestation'
    }, {
      imgUrl: '/images/service.png',
      title: '客服',
        go: 'service'
    }, {
      imgUrl: '/images/alarm.png',
      title: '一键报警',
      go: 'alarm'
    }, {
      imgUrl: '/images/record.png',
      title: '一键录音',
      go: 'record'
    }, {
      imgUrl: '/images/setting.png',
      title: '设置',
      go: 'setting'
    }]
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
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  onLoad() {
    app.editTabbar();
    console.log(app.globalData.px2rpx);
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
      },
    })
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },

  toggleActionSheet2() {
    this.toggle('show');
  },
  changeUser(e){
    console.log(e);
    this.setData({
      userType:e.detail.select
    });
    this.toggle('show')
  },



  //选择图片
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({ backgroundSrc: tempFilePaths[0] })
      }
    })
  },



//点击的选择框中的值
  choose: function(e){
    console.log(e.currentTarget.id);
  },

  //页面跳转
  getfanspage: function(e){
    wx.navigateTo({
      url: './user/fans/fans',
    })
  },
  getinterestspage:function(){
    wx.navigateTo({
      url: './user/interests/interests',
    })
  },
  getworkspage: function () {
    wx.navigateTo({
      url: './user/works/works',
    })
  },
  getfootprintpage: function () {
    wx.navigateTo({
      url: './user/footprint/footprint',
    })
  },

  //跳转我的订单页面
  getmyorderpage:function(){
    wx.navigateTo({
      url: './myOrder/myOrder?pagenum=' + 0 + '&userType=' + this.data.userType,
    })
  },
  getmyordertabpage: function (e) {
    console.log(e)
    var page=e.currentTarget.dataset['pagenum']
    console.log(this)
    wx.navigateTo({
      url: './myOrder/myOrder?pagenum=' + page + '&userType=' + this.data.userType,
    })
  },

  //跳转摄影师订单界面
  getphotographerOrderpage: function () {
    wx.navigateTo({
      url: './photographerOrder/photographerOrder?pagenum=' + 0 ,
    })
  },
  getphotographerOrdertabpage: function (e) {
    var page = e.currentTarget.dataset['pagenum']
    console.log(page)
    wx.navigateTo({
      url: './photographerOrder/photographerOrder?pagenum=' + page,
    })
  },

  //跳转相关服务订单页面
  getservicepage:function(){
    wx.navigateTo({
      url: './serviceOrder/serviceOrder?pagenum=' + 0 + '&userType=' + this.data.userType,
    })
  },
  getservicetabpage: function (e) {
    console.log(e)
    var page = e.currentTarget.dataset['pagenum']
    console.log(page)
    wx.navigateTo({
      url: './serviceOrder/serviceOrder?pagenum=' + page + '&userType=' + this.data.userType,
    })
    },

    //跳转普通功能页面
    getfunctionpage:function(e){
      wx.navigateTo({
        url: './userBox/' + e.currentTarget.id + '/' + e.currentTarget.id,
      })
    }

})
