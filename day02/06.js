var http=require('http');
var url=require('url');
var fs=require('fs')
http.createServer(function(req,res){
    var obj=url.resolve('http://127.0.0.1:3000','/green')   //obj==http://127.0.0.1:3000/green
    var query=url.parse(obj,true)
    if(query.path=='/green'){
        fs.readFile('./static/green.html',function(err,data){
            res.end(data)
        })
    }
}).listen(3000)