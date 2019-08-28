var express=require('express');
var router=require('./router');
//post请求方式获取传输字段的方法    中间件
var bodyParser=require('body-parser')
var app=express();
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(router);
app.listen(3000)