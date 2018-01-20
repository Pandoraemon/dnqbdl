//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    people: "128",
    money: "1280",
  },
  //事件处理函数
  onLoad: function () {
    wx.getStorage({
      key: 'paied',
      success: res => {
        if (res.data === true) {
          wx.reLaunch({
            url: 'payed',
          })
        }
      },
    })
  }
})
