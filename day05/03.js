var express=require('express')
var app=express();
app.get('/',(req,res)=>{
    var data=res.cookie('name','tom',{maxAge:90000,httpOnly:true})
    res.send()
})
app.get('/login',(req,res)=>{
  console.log(req);
      //如何取出存储的值？
    var data=req.headers.cookie.split('=');

    // console.log(data[1]);
    
    
    res.send({'data':data[1]})
})
app.listen(3000)
/*
什么是cookie？      存储空间
  只针对一级域名
    浏览器端的   大小：4kb  页面中最多出现的次数：20
    maxAge：过期时间  单位：毫秒
    domain  域名
    path    路径  在该路径下才可以访问当前缓存
    httpOnly  设置https或http
    singIed  签名
    expires  ==maxAge  过期时间

应用场景：
  登录    注册     购物车

*/