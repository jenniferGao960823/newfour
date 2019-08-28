//ejs   art-template
var express=require('express');    //express携带ejs,无需再次引入
var app=express();
var arttemplate=require('express-art-template')
app.engine('art',arttemplate);
//第二种方法
//set  设置          engine  引擎     ejs  模板引擎
//如何设置模板引擎
//支持链式调用
app.get('/',(req,res)=>{
    var list=['a','b','c']
    res.render('list.art',{list:list})
    res.send()
})
app.listen(3000)