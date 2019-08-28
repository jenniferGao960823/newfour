var http=require('http')
var fs=require('fs')      //fs文件系统模块
http.createServer((req,res)=>{
    //readFile(url,options,callback)    异步
    fs.readFile('./static/1.txt',(err,data)=>{
        res.end(data)
    })
    // fs.readFileSync()   同步   但一般操作用异步
    //writeFile(url,data,options,callback)   options
    fs.writeFile('./static/2.txt','i am good girl',{'flag':'a'},(err,data)=>{    //a append  r  read  w  write
        if(err) throw err
        res.end('success')
    })
}).listen(3000)