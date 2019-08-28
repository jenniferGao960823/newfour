var http=require('http')
var fs=require('fs')      //fs文件系统模块
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){    //解决favicon的问题（容易在cmd中输出undefined）   会导致而此操作
        return
    }
    //rename  改名
    fs.rename('./static/1.txt','./static/a.txt',(err)=>{
        if(err) throw err;
        res.end('success')
    })
    //unlink  删除文件
    fs.unlink('./static/2.txt',(err)=>{
        if(err) throw err;
        res.end('success')
    })
}).listen(3000)