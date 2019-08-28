//接口编写文件
var express=require('express');
var router=express.Router();
router.get('/reg',(req,res)=>{
    res.send({'success':'ok','data':[{'username':'rose','age':12},{'username':'jack','age':14}]})
})
module.exports=router