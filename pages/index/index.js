Page({
  data: {
      items: [
        {
            txt: 'Add something!',
            ctype: 'circle',
            completed: false,
            id: 0
            }
      ]
  },
  init: function(){
      this.setData({
          all: '',
          completed: ''
      })
  },
  onLoad: function (){
      this.init()
  },
  setComplete: function(e){
      this.init()
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
  },
  deleteItem: function(e){
      this.init()
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
  },
  bindAll: function() {
      this.setData({
          all: 'act',
          completed: ''
      })
  },
  bindCompleted: function(){
        this.setData({
            all: '',
            completed: 'act',
        })
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
  }
})