//接口编写文件
var express=require('express');
var router=express.Router();

router.post('/login',(req,res)=>{
    //数据库存放的内容
    var data={
        'username':'amy',
        'password':123
    }
    //数据库返回的内容
    var result=[{'username':'amy','password':123,'phone':1344444}]
    
    if(req.body.username==data.username&&req.body.password==data.password){
        res.send({'success':'ok','data':result})
    }else{
        res.send({'error':'用户名错误'})
    }
    
})
module.exports=router




