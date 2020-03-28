// pages/userPage/userBox/card/card.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.statusBarHeight + 46,
    screenHeight: 5,

    cardsList:[{
      number:30,
      hascondition:false,
      shop:"无限制优惠券",
      condition:"无限制条件",
      start:'2019.05.01',
      finish:'2019.05.30'
    }, {
        number: 30,
        hascondition:true,
        shop:'海马体(湖滨银泰店)',
        imgUrl:'./images/shop.png',
        condition: 199,
        start: '2019.05.01',
        finish: '2019.05.30'
      }]
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