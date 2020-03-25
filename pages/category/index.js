// pages/category/index.js
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 接口的返回数据
  Cates: [],
  // 左侧的菜单数据
  leftMenuList: [],
  // 右侧的菜单数据
  rightContent:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcates()
  },
 getcates(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'}).then(res=>{
      this.aaa = res.data.message;
              // 构造左侧的大菜单数据
        let leftMenuList = this.aaa.map(v => v.cat_name);
        let rightContent = this.aaa[0].children;
              this.setData({
          leftMenuList,
          rightContent
        })
    })
  }
})