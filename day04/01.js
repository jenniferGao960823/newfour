//使用npm之前先初始化:npm  init
var http = require('http');
var ejs = require('ejs');
var fs=require('fs')           //为了读取模板

//render  渲染       compile   编译      template   模板
// ejs.render(template,data)        data必须是一个对象!!!
// index.ejs

//编译标签<% %>
//输出标签<%= %>
//注释<%# %>
//去除首位空格<%_ %>
//去除末尾空格<% _%>
http.createServer((req, res) => {
    var list=['首页','分类','关于']
    fs.readFile('./view/index.ejs',(err,data)=>{
        var template=data.toString();    //获取模板
        
        var str=ejs.render(template,{list:list})
        res.end(str)
    })

}).listen(3000, () => {
    console.log('服务已经挂起');

})