var http=require('http')
var fs=require('fs')      //fs文件系统模块
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){    //解决favicon的问题（容易在cmd中输出undefined）   会导致而此操作
        return
    }
    fs.writeFile('./static/aa/2.txt','aaa',(err)=>{
        if(err) throw err;
        res.end('success')
    })
    //mkdir   创建文件夹
    // fs.mkdir('./static/d',(err)=>{
    //     if(err) throw err
    //     res.end('success')
    // })
    //rmdir  删除文件夹

    // fs.rmdir('./static/d',(err)=>{
    //     if(err) throw err;
    //     res.end('success')
    // })

    // //readdir  读取文件夹
    // fs.readdir('./static/aa',(err,data)=>{
    //     if(err) throw err;
    //         res.end(data.toString());
    // })
    // //exists  判断是否是文件夹
    // fs.exists('./static/aa',(exists)=>{
    //     if(exists) console.log('文件夹已存在');      //如果存在
    //     fs.mkdir('./static/aa',(err)=>{     //如果不存在，创建一个
    //         if(err) throw err;
    //         res.end('success')
    //     })             
    // })

    //stat  判断状态，判断是文件夹还是文件
    // fs.stat('./static/c',(err,stats)=>{
    //     console.log(stats.isDirectory());  //true     isDirectory()判断是否是文件夹   isFile()判断是否是文件
    //     res.end('success')
    // })
    
    fs.stat('./static/aa/2.txt',(err,stats)=>{
        console.log(stats.isFile());  
        res.end('success')
    })
}).listen(3000,()=>{
    console.log('listen挂起');
})