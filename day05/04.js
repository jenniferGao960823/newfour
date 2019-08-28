//cookie-parser
var express=require('express');
//可以储存二级域名或更多！！！
/**
 * 域名www.ddd.com
 * 二级域名www.ddd.com.cn
 * 
 */
var cookie=require('cookie-parser')
var app=express();
app.use(cookie())
app.get('/set',(req,res)=>{
    //存储
    res.cookie('username','admin',{maxAge:90000,httpOnly:true})
    res.send('cookie设置成功')
})
app.get('/get',(req,res)=>{
    //获取时，传输字段存放在req中。所以通过req获取username
    //res下面有一个req，cookies在req下面
    var data=req.cookies.username
    console.log(res);
    
    res.send({'data':data})
})
app.listen(3000)