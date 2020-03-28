// pages/release/style/style.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,
    type:'',

    model1: [
      {
        title: '古风',
        selectImage: false
      },
      {
        title: '私房',
        selectImage: false
      },
      {
        title: '闺蜜',
        selectImage: false
      },
      {
        title: '新锐',
        selectImage: false
      },
      {
        title: '日系',
        selectImage: false
      },
      {
        title: '欧美',
        selectImage: false
      },
      {
        title: '胶片',
        selectImage: false
      },
      {
        title: '黑白',
        selectImage: false
      },
      {
        title: '清新',
        selectImage: false
      },
      {
        title: '街拍',
        selectImage: false
      },
      {
        title: '复古',
        selectImage: false
      },
      {
        title: 'COS',
        selectImage: false
      },
      {
        title: '森系',
        selectImage: false
      },
      {
        title: '亲子',
        selectImage: false
      },
      {
        title: '校园',
        selectImage: false
      },
      {
        title: '性感',
        selectImage: false
      },
      {
        title: '文艺',
        selectImage: false
      },
      {
        title: '可爱',
        selectImage: false
      },
      {
        title: '情绪',
        selectImage: false
      },
      {
        title: '少女',
        selectImage: false
      },
      {
        title: '旗袍',
        selectImage: false
      },
      {
        title: '中国风',
        selectImage: false
      },
      {
        title: '轻写真',
        selectImage: false
      }
    ],

    model2: [
      {
        title: '城市旅拍',
        selectImage: false
      },
      {
        title: '景区旅拍',
        selectImage: false
      }
    ],

    model3: [
      {
        title: '风景',
        selectImage: false
      },
      {
        title: '服装',
        selectImage: false
      },
      {
        title: '建筑',
        selectImage: false
      },
      {
        title: '产品',
        selectImage: false
      },
      {
        title: '美食',
        selectImage: false
      }
    ],

    model4: [
      {
        title: '婚纱照',
        selectImage: false
      },
      {
        title: '婚礼跟拍',
        selectImage: false
      }
    ],
    model5: [
      {
        title: '证件照',
        selectImage: false
      },
      {
        title: '签字照',
        selectImage: false
      },
      {
        title: '艺考照',
        selectImage: false
      },
      {
        title: '闺蜜照',
        selectImage: false
      },
      {
        title: '形象照',
        selectImage: false
      },
      {
        title: '文艺照',
        selectImage: false
      },
      {
        title: '毕业照',
        selectImage: false
      },
      {
        title: '轻写真',
        selectImage: false
      },
      {
        title: '结婚照',
        selectImage: false
      },
      {
        title: '全家福',
        selectImage: false
      },
      {
        title: '宠物照',
        selectImage: false
      }
      
    ],

    model6: [
      {
        title: '生活',
        selectImage: false
      },
      {
        title: '人文',
        selectImage: false
      },
      {
        title: '地理',
        selectImage: false
      },
      {
        title: '城市',
        selectImage: false
      },
      {
        title: '专题',
        selectImage: false
      }
    ],

    model7: [
      {
        title: '机器绘图',
        selectImage: false
      },
      {
        title: '手工绘图',
        selectImage: false
      }
    ]

  },

  selectClick1: function (event) {
    for (var i = 0; i < this.data.model1.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model1[i].selectImage = true
      }
      else {
        this.data.model1[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model1)

    prevPage.setData({
      style: this.data.model1[event.currentTarget.id].title
    })


  },

  selectClick2: function (event) {
    for (var i = 0; i < this.data.model2.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model2[i].selectImage = true
      }
      else {
        this.data.model2[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model2)

    prevPage.setData({
      style: this.data.model2[event.currentTarget.id].title
    })


  },

  selectClick3: function (event) {
    for (var i = 0; i < this.data.model3.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model3[i].selectImage = true
      }
      else {
        this.data.model3[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model3)

    prevPage.setData({
      style: this.data.model3[event.currentTarget.id].title
    })


  },

  selectClick4: function (event) {
    for (var i = 0; i < this.data.model4.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model4[i].selectImage = true
      }
      else {
        this.data.model4[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model4)

    prevPage.setData({
      style: this.data.model4[event.currentTarget.id].title
    })


  },

  selectClick5: function (event) {
    for (var i = 0; i < this.data.model5.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model5[i].selectImage = true
      }
      else {
        this.data.model5[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model5)

    prevPage.setData({
      style: this.data.model5[event.currentTarget.id].title
    })


  },

  selectClick6: function (event) {
    for (var i = 0; i < this.data.model6.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model6[i].selectImage = true
      }
      else {
        this.data.model6[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model6)

    prevPage.setData({
      style: this.data.model6[event.currentTarget.id].title
    })


  },

  selectClick7: function (event) {
    for (var i = 0; i < this.data.model7.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.model7[i].selectImage = true
      }
      else {
        this.data.model7[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model7)

    prevPage.setData({
      style: this.data.model7[event.currentTarget.id].title
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type
    })

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