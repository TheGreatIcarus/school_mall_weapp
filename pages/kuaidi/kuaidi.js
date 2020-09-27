// pages/kuaidi/kuaidi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var delivery = JSON.stringify(e.detail.value);
    wx.request({
      url: 'http://localhost:8080/Delivery/insertDelivery',
      data: {
       delivery
      },
      header: {'content-type':'application/x-www-form-urlencoded'},
      method: 'POST',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }


})