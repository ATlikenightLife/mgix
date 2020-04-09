// pages/duzi/duzi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getlist:[],
    admlist:[],
    lanjz:10,
    name: '',
    test: 'test',
    tag: false,
    left: 0,
    indexCurrent: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  video_play(e) {
    var curIdx = e.currentTarget.id;
    // 没有播放时播放视频
    // console.log(curIdx)
    if (!this.data.indexCurrent) {
      this.setData({
        indexCurrent: curIdx
      })
      var videoContext = wx.createVideoContext(curIdx, this) //这里对应的视频id
      videoContext.play()
    } else { // 有播放时先将prev暂停，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext(this.data.indexCurrent, this)//this是在自定义组件下，当前组件实例的this，以操作组件内 video 组件（在自定义组件中药加上this，如果是普通页面即不需要加）
      if (this.data.indexCurrent != curIdx) {
        console.log('ok')
        videoContextPrev.pause()
        this.setData({
          indexCurrent: curIdx
        })
        var videoContextCurrent = wx.createVideoContext(curIdx, this)
        videoContextCurrent.play()
      }
    }
  },
   
  onLoad: function (options) {
    wx.request({
      url: 'https://api.apiopen.top/getJoke?page=1&count=200&type=video',
      success: res=>{
        // console.log(res.data.result)
        this.setData({
          getlist: res.data.result,
          admlist: res.data.result.slice(0,10)
        })
      }
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
    var arr=this.data.getlist
    var idx=this.data.lanjz
    var idx2= idx+10
    var xxx = arr.slice(0, idx2)
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    setTimeout(()=>{
    this.setData({
      admlist: xxx,
      lanjz: idx2
    })
    },800)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})