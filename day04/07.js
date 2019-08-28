//ejs   art-template
var express=require('express');    //express携带ejs,无需再次引入
var app=express();
var path=require('path')
// app.set('view engine','ejs');
//第二种方法
app.set('views',path.join(__dirname,'/views'))
//set  设置          engine  引擎     ejs  模板引擎
//如何设置模板引擎
//支持链式调用
app.get('/',(req,res)=>{
    var list=['index','news','about']
    res.render('index.ejs',{list:list})
    res.send()
})
app.listen(3000)