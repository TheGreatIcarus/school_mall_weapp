// pages/stores/stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    QueryParams:{
      storeName:""
    },
    leftMenuList: [],
    
    rightContent: [],

    cates:[]

  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.QueryParams.storeName = options.storeName;
    var self = this;
    wx.request({
      url: 'http://localhost:8080/Category/getAll',
      data: {storeName:this.data.QueryParams.storeName},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result.data);
        self.setData({
          cates:result.data
        })
        let leftMenuList = this.data.cates.map(v => v.dbCategory.catType);


        let rightContent = this.data.cates[0].dbGoods;
        this.setData({
          leftMenuList,
          rightContent
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    
   
    
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