// 实现登陆注册功能
/*
  客服端=>前端
    <form>
    submit=>username+password
    </form>
  服务端=>后端
  接收 username  password

  假设一个数据库
    username=admin   password=123

  数据库  mysql  mongodb

*/
var http=require('http')
var url=require('url')
var fs=require('fs');
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    var userInfo=url.parse(req.url,true).query;
    console.log(userInfo);
    var neirong="用户名"+userInfo.username+"密码"+userInfo.password+'#';
    console.log(neirong);
    

    fs.writeFile('./static/userinfo',neirong,{'flag':'a'},(err,data)=>{
        if(err) throw err;
        res.end('success')
    })
    
}).listen(3000)

http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    var obj2=url.parse(req.url,true).query;
    console.log(obj2);
    var neirong="用户名"+obj2.username+'密码'+obj2.password;
    res.writeHead(200,{'Content-type':"text/html;charset=utf8"})
    fs.readFile('./static/userinfo',(err,data)=>{
        if(err) throw err;
        var str=data.toString()
        var arr=str.split('#');
        console.log(arr);
        for(var i=0;i<arr.length;i++){
            if(arr[i]==neirong){
                res.end('登录成功')
            }
        }
        
        res.end('登陆失败')
    })
    
}).listen(3300)