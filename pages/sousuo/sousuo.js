// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gexlist: [],
    adx:true

  },
  open(event){
    var unds= event.detail.value
    // console.log(unds);
    wx.request({
      url: 'http://api.pingcc.cn/?xsname='+unds,
      success: res => {
        this.setData({
          gexlist: res.data.list,
        })

      }
    })

  },
  func: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/xshxq/xshxq?id=' + this.data.gexlist[index].url,
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