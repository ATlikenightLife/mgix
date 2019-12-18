// pages/xshuo/xshuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6'],
    imgs: ['../../images/LBT001.jpg', '../../images/LBT002.jpg','../../images/LBT003.jpg',
      '../../images/LBT004.jpg', '../../images/LBT005.jpg', '../../images/LBT006.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2400,
    duration: 400,
    gexlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://api.pingcc.cn/?xsname=',
      success:res=>{
        var arr=[]
        for(var i=0;i<30;i++){
        arr.push(res.data.list[i])
        }
        
        this.setData({
          gexlist: arr
        })
        console.log(this.data.gexlist)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})