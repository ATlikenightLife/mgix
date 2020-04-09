// pages/xsnro/xsnro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xshnro:[],
    xshbt:'',
    zjid:0,
    zjurl:[],
    bgx:' #FFF2E2',
    bodyzt:'#303133',
    fonts:'38rpx',
    fontx:38
  },
  rejian(){
    this.setData({
      bgx: '#FFF2E2',
      bodyzt:'#303133'
    })
  },
  yejian(){
    this.setData({
      bgx: '#3C3B3D',
      bodyzt: '#F5F7FA'
    })
  },
  zitjian(){
    var fontxxx=this.data.fontx-=2
    if (fontxxx < 30) fontxxx=30
      this.setData({
        fonts: fontxxx+'rpx',
        fontx: fontxxx
      })
  },
  zitjia() {
    var fontxxx = this.data.fontx += 2
    this.setData({
      fonts: fontxxx + 'rpx',
      fontx: fontxxx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.request({
      url: 'http://api.pingcc.cn/?xsurl2=' + options.name,
      success:res=>{
        // console.log(res.data.content)
        // console.log(res.data.num)
        this.setData({
          xshnro:res.data.content,
          xshbt:res.data.num,
          zjid: options.id,
        })
      }
    })
    // 请求章节 点击上下章
    wx.request({
      url: 'http://api.pingcc.cn/?xsurl1='+options.url,
      success: res=>{
        // console.log(res)
        this.setData({
          zjurl:res.data.list
        })
        // console.log(this.data.zjurl)
      }
    })
  },
  // 下一章的方法
    goxia(){
      this.data.zjid++
      if (this.data.zjid > this.data.zjurl.length-1){
      this.data.zjid = this.data.zjurl.length - 1
        // console.log(this.data.zjid)
      wx.showModal({
        title: '温馨提示',
        content: '已经是最后一章了！！！',
        success(res) {
          if (res.confirm) {//确定
          } else if (res.cancel) {//取消
          }
        }
      })
      return
      }
      // 请求下一章
      wx.request({
        url: 'http://api.pingcc.cn/?xsurl2='+this.data.zjurl[this.data.zjid].url,
        success: res=>{
          // console.log(res)
          this.setData({
            xshnro: res.data.content,
            xshbt: res.data.num
          })
        }
      })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1200
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 10
      })
        
    },
     // 下一章的方法 END
    //  上一章的方法
  goshang(){
    this.data.zjid--
    if (this.data.zjid<0){
      this.data.zjid = 0
      console.log(this.data.zjid)
      wx.showModal({
        title: '温馨提示',
        content: '已经是第一章了！！！',
        success(res) {
          if (res.confirm) {//确定
          } else if (res.cancel) {//取消
          }
        }
      })
      return
    }
    // 请求上一章
    wx.request({
      url: 'http://api.pingcc.cn/?xsurl2=' + this.data.zjurl[this.data.zjid].url,
      success: res => {
        // console.log(res)
        this.setData({
          xshnro: res.data.content,
          xshbt: res.data.num
        })
      }
    })
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1200
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 10
    })

  },

    //  上一章的方法END





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