var express=require('express');
var bodyParser=require('body-parser')     //属于方法
var app=express();
//使用静态资源    使url显示服务器地址
app.use(express.static('static'))
app.use(bodyParser.urlencoded({extended:'false'}))      //使用中间件
app.get('/',(req,res)=>{
    res.send('首页')
})
// app.get('/list',(req,res)=>{
//     console.log(req.query);
    
//     res.send('列表接收传输过来的username为:'+req.query.username)
// })
app.post('/dopost',(req,res)=>{   //post不能直接用query获取username,需要使用中间件!!!
    /*
    中间件(还属于包,需要下载):   包含(路由中间件)(第三方中间件)
    body-parser   处理post请求
    */
   console.log(req.body);
   
    console.log(req.body);
    
    res.send('dopost:'+req.body.username)
})
app.listen(3000)