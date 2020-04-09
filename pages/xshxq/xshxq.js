// pages/xshxq/xshxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    XQdata:[],
    XQlist:[],
    gotop:false,
    projectNum:0,
    urlx:''
  },

  topx(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 1500
    })
  },
  bottomx(){
    // 获取页面高度
    let query = wx.createSelectorQuery()
    // 通过节点获取位置信息
    query.select('#car-height').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(res => {
      console.log(res[0].height)
      // setTimeout(() => {
        // 100 为输入框高度
        wx.pageScrollTo({
          scrollTop: res[0].height,
          duration: 1500
        })
      // }, 1000)
    })
  },
  nroxxx(e){
    var index = e.currentTarget.dataset.index;
    // console.log(this.data.XQlist[index].url)
    wx.navigateTo({
      url: '/pages/xsnro/xsnro?id=' + index + '&name=' + this.data.XQlist[index].url+'&url='+this.data.urlx,
      // url: ' / pages / xsnro / xsnro'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://api.pingcc.cn/?xsurl1=' + options.id,
      success:res=>{
        this.setData({
          XQdata:res.data.data,
          XQlist: res.data.list,
          urlx: options.id
        })
        // console.log(res)
        // console.log(this.data.urlx)
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
    console.log(666)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})