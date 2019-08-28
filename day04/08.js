// art-template
var express=require('express');
var app=express();
var path=require('path')
//使用引擎
app.engine('art',require('express-art-template'))
//设置引擎
app.set('views',path.join(__dirname,'views'))
app.set('view engine','art')
app.get('/',(req,res,next)=>{                  //next继续执行,是一个方法
    var list=['index','news','about'];
    res.render('list.art',{list:list})

})
app.listen(3000)