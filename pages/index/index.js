//index.js
//获取应用实例
const app = getApp()
import {request} from "../../request/index"
Page({
  data:{
    // 轮播数据
    swiperlist:[],
    // 导航数据
    daohanglist:[]
  },
  // 页面开始加载就会触发
  onLoad:function(options){
    this.getswiperlist()
    this.gitdaohanglist()
  },
  getswiperlist(){
// 发送异步请求获取轮播数据
request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then(result=>{
  this.setData({
    swiperlist:result.data.message
  })
})
  },
  gitdaohanglist(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}).then(result=>{
  this.setData({
    daohanglist:result.data.message
  })
})
  }
})
