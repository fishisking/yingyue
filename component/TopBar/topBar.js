// component/TopBar/topBar.js
Component({
  /**
   * Component properties
   */
  properties: {
    
    navH: {
      type: Number
    },
    pageTitle: {
      type: String
    }
  },
 


  /**
   * Component initial data
   */
  data: {
  },

  /**
   * Component methods
   */
  methods: {
    
    navBack: function () {
      wx.navigateBack({
        delta: 1
      })
    },
    navHome: function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
})
