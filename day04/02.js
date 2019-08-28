//art-template
//重要方法:render   template
// 两种语法形式:<%%>原始语法       {{}}标准语法(插值表达式)
// list.art
var http=require('http');
var art=require('art-template');
var fs=require('fs')
http.createServer((req,res)=>{
    var list=['首页','新闻','关于'];
    fs.readFile('./view/list.art',(err,data)=>{
        console.log(data.toString());
        var template=data.toString();
        var str=art.render(template,{list:list})
        res.end(str)
    })
}).listen(3000,()=>{
    console.log('服务已经挂起');
})