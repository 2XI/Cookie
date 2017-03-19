Page({
  data: {
      src: '../../assets/logo.jpeg',
      flag: true
  },
  nav: function(){
    this.setData({
      flag: false
    })
    wx.navigateTo({
      url: '../todos/todos'
    })
  },
  onLoad: function (){
    var self = this
    setTimeout(function(){
      if(self.data.flag) {
        wx.navigateTo({
          url: '../todos/todos'
       })
      } else {
          return
      }
    },6000)
  }
})