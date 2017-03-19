Page({
  data: {
      items: [
        {
            txt: 'Add something!',
            ctype: 'circle',
            completed: false,
            id: 0
            }
      ],
      al: true,
  },
  init: function(){
      this.setData({
          all: 'act',
          completed: ''
      })
  },
  saveStorage: function(){
      wx.setStorageSync('items', this.data.items)
  },
  onLoad: function (){
      this.init()
      var items = wx.getStorageSync('items')
      if(items) {
        this.setData({
            items: wx.getStorageSync('items')
        })
      }
  },
  setComplete: function(e){
      var _id = e.target.id
      var data = this.data.items
      data.filter(function(element, index){
         if(element.id == _id) {
            _id = index
         }
      })
      data[_id].completed = !data[_id].completed
      this.setData({
          items: data
      })
      this.saveStorage()
  },
  deleteItem: function(e){
      var _id = e.target.id
      var data = this.data.items
      data.filter(function(element, index){
         if(element.id == _id) {
            _id = index
         }
      })
      data.splice(_id, 1)
      this.setData({
          items: data
      })
      this.saveStorage()
  },
  bindAll: function() {
      this.setData({
          all: 'act',
          completed: '',
          al: true
      })
      this.saveStorage()
  },
  bindCompleted: function(){
        this.setData({
            all: '',
            completed: 'act',
            al: false
        })
        this.saveStorage()
  },
  finish: function(e){
      var val = e.detail.value
      var data = this.data.items
      data.push({
        txt: val,
        ctype: 'circle',
        completed: false,
        id: data.length + 1
      })
      this.setData({
            items: data,
            val: ''
      })
      this.saveStorage()
  },
  onUnload: function(){
      this.saveStorage()
  }
})