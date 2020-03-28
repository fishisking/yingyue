const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    hideModal2: true,
    currentSelect:"0",
    currentSelect2:"0",
    navH: app.globalData.statusBarHeight + 46,
    isIphoneX: app.globalData.isIphoneX,
    screenHeight: 5,
    px2rpx: app.globalData.px2rpx,
    listtype: [{ "typename": "女王照(单人照)", "price": "￥259", "nums": "1","selectother":"天生合群"},
      { "typename": "女王照(单人照)", "price": "￥359", "nums": "1", "selectother": "神秘莫测-四宫格" }]
  },
  //选择框
  SelectTab: function (e) {
    var that = this;
    if (this.data.currentSelect == 0){
      this.setData({
        currentSelect: "1"
      })
    }else if(this.data.currentSelect ==1){
      this.setData({
        currentSelect: "0",
      })
    }
    // console.log(this.data.currentSelect)
  },
  //选择框
  SelectTab2: function (e) {
    var that = this;
    if (this.data.currentSelect2 == 0) {
      this.setData({
        currentSelect2: "1"
      })
    } else if (this.data.currentSelect2 == 1) {
      this.setData({
        currentSelect2: "0",
      })
    }
    // console.log(this.data.currentSelect)
  },
  //日期选择跳转
  goToDateChoose: function (e) {
    wx.navigateTo({
      url: '../DateChoose/Date/Date',
    })
  },
  goToSubmission:function(e){
    wx.navigateTo({
      url: '../Submission/Submission',
    })
  },

  // 显示遮罩层 
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear 
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn(); //调用显示动画 
    }, 200)
  },

  // 隐藏遮罩层 
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear 
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画 
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720) //先执行下滑动画，再隐藏模块 
  },
/*底部弹窗2 */
  // 显示遮罩层 
  showModal2: function () {
    var that = this;
    that.setData({
      hideModal2: false
    })
    var animation = wx.createAnimation({
      duration: 600, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear 
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn(); //调用显示动画 
    }, 200)
  },

  // 隐藏遮罩层 
  hideModal2: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear 
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画 
    setTimeout(function () {
      that.setData({
        hideModal2: true
      })
    }, 720) //先执行下滑动画，再隐藏模块 
  },
  //动画集 
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性 
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
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