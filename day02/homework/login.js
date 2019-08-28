var http=require('http');
var url=require('url');
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }
    var obj=url.parse(req.url,true).query;
    console.log(url.parse(req.url));
    
    res.writeHead(200,{'Content-type':"text/html;charset=utf8"});
    res.end(url.parse(req.url))
   
}).listen(3000,()=>{
    console.log('listen挂起');
})