// var http=require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':"text/html;charset=utf8"})
//     res.end('我爱中国')
// }).listen(3000)
var http=require('http');
var fs=require('fs');
var sever=http.createServer();
sever.on('request',function(req,res){
    if(req.url=='/'){
        fs.readFile('./html/red.html',function(err,data){
            res.end(data)
        })
    }else if(req.url.startsWith('/css')){
        fs.readFile(__dirname+req.url,function(err,data){
            res.end(data)
        })
    }
}).listen(3000,function(){
    console.log('listen挂起')
})
