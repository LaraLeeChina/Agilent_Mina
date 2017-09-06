// pages/authentication/authentication.js
var clock='';
var nums=60;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    mobile: {},
    verification_code: {},
    disabled:true,
    disabled1:false,
    code:"获取验证码",
    clock:'',
    nums :60,
    mobileV: false,
    codeV: false, 
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

  },
  
  registrationSubmit: function (e) {
    //验证手机号与短信验证码
    console.log(e.detail.value);
    var mobile = e.detail.value.mobile
    var vfcode = e.detail.value.verification_code
    
    /*
    wx.request({
      url: 'https://devopsx.coffeelandcn.cn/agilent/web/auth/register',
      data: {
        'openid': 'oVpgL0YIl_OobwRZsAgrhKQ2FHjA',
        'mobile': mobile,
        'verification_code': vfcode,
        disabled:true,
      },
      success: function (res) {
        console.log(res);
        if (res.data.success == true) {
          //短信验证码正确，需要在AWS中关联wechat&SAP信息
          wx.redirectTo({
            url: '../service_request/service_request'
          })
        } else {
          //短信验证码错误
          wx.showToast({
            title: '验证码错误',
            icon: 'fail',
            duration: 2000
          })
        }
      },
      fail: function (err) {
        console.log(err);
      }
    });*/
  }, 
   //获取验证码
  getSMSCode: function () {
    console.log('getSMSCode');
    var that = this;
    that.setData({ disabled1: true })
    that.setData({ code: nums + '秒' })
    clock = setInterval(that.doLoop, 1000);
    console.log(that.data.mobile);
    //对接SMS服务器获取短信验证码
    /*
    wx.request({
      url: '',
      data: {
        'countrycode': '',
        'mobile': that.data.mobile
      },
  
      success: function (res) {
        console.log(res.data.status);
        if (res.data.status == 1) {
          that.setData({ disabled1: true})
          that.setData({code:nums+'秒'})
          clock = setInterval(that.doLoop,1000);     
        }
      },
      fail: function (err) {
        console.log(err);
      }
    });*/
  },
  doLoop() {
    var that = this;   
    if(nums>0)
    {
      that.setData({ code: nums + '秒' })
      nums--;
    }
    else{
      clearInterval(clock);
      that.setData({ disabled1:false })
      that.setData({ code:'获取验证码' }) 
      nums = 60;
    }
  },

  //判断输入框的值是否为空
  getmobile: function (e) {
    console.log(e.detail.value)
    if(e.detail.value == null ||e.detail.value == ""){
      this.setData({ mobileV: false })      
    } else{
      this.setData({ mobileV: true })
    }
  },
   //判断输入框的值是否为空
  getcode: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == null || e.detail.value == "") {
      this.setData({ codeV: false })     
    } else{
      this.setData({ codeV: true })
    }
  },

})