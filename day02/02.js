var http=require('http');
var fs=require('fs')
//创建服务器
http.createServer(function(req,res){
    console.log(req.url);    //req.url可以获取地址栏中的参数
    res.writeHead(200,{'Content-type':"text/html;charset=utf8"})    //响应头，防止写入中文乱码
    var type=req.url
    switch(type){
        case "/": res.end('首页');
        case '/red': 
        fs.readFile('./static/red.html',function(err,data){
            res.end(data)
        });
        break;
        case '/green': 
        fs.readFile('./static/green.html',function(err,data){
            res.end(data)
        });
        break;
        case '/red.css':
        res.writeHead(200,{'Content-type':"text/css"})
        fs.readFile('./static/red.css',function(err,data){
            res.end(data)
        });
        case '/1.jpg':
        res.writeHead(200,{'Content-type':"image/jpg"})
        fs.readFile('./static/1.jpg',function(err,data){
            res.end(data)
        })

    }
}).listen(3000,function(){
    console.log('listen挂起')
})