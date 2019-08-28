var express=require('express');      //express底层全部是那node.js封装的
// console.log(express);
//[Function: createApplication]    创建一个服务端
//express=createServer  创建一个服务端
var app=express();在
//context  执行上下文
// console.log(app);
// app.use('/',(req,res)=>{
//     res.send({'express':"ok"})
// })
// app.use('/red',(req,res)=>{
//     res.send('you are right')
// })
//第二次使用use还是会返回第一次的结果
// app.get('/new',(req,res)=>{
//     res.send('news')
// })
// app.get('/about',(req,res)=>{
//     res.send('about')
// })
//get可以多次调用,每次返回需求的值,不会覆盖
app.get('/about/:id',(req,res)=>{
    res.send(req.params.id)
})
app.listen(3000)