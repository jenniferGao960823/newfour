var http=require('http');
http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/favicon.ico'){    //解决favicon的问题（容易在cmd中输出undefined）   会导致二次操作
        return
    }
    res.end(req.url)
}).listen(3000)