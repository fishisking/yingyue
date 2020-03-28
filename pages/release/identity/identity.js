// pages/release/identity/identity.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,

    model:[
    {
      title:'作品摄影师',
      selectImage:false
    },
    {
      title:'作品模特',
      selectImage:false
    }
    ]

  },
  
  selectClick:function(event){
    for(var i=0;i<this.data.model.length;i++){
      if(event.currentTarget.id == i)
      {
        this.data.model[i].selectImage = true
      }
      else
      {
        this.data.model[i].selectImage = false
      }
    }
    this.setData(this.data)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    console.log(this.data.model)

    prevPage.setData({
      identity:this.data.model[event.currentTarget.id].title
    })
    

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