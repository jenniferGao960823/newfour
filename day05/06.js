//解决跨域问题
var express=require('express');
var app=express();
app.all('*',(req,res,next)=>{
    //*==>允许所有域名进行访问
    res.header('Access-Control-Allow-origin','*')
    //content-type==>定义请求头类型
    res.header('Access-Control-Allow-Headers','content-type')
    //Method==>定义允许跨域访问的请求方式
    res.header('Access-Control-Allow-Method','GET','POST','PUT','PATCH','DELETE','OPTIONS')
    //继续执行
    next()
})
app.listen(3000)