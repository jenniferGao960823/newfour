var express=require('express')
var router=require('./router')
var indexRouter=require('./indexRouter')
var app=express();
//第三方中间件需要通过use去使用

app.use('/handler',router)         //访问时将handler路由嵌套在login前面
// router.get('/login',(req,res)=>{
//     res.send('login')
// })
app.use('/index',indexRouter)
app.listen(3000)