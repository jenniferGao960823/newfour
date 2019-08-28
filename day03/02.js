//读取所有文件夹
var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
   fs.readdir('./album/',(err,data)=>{
       if(req.url=='favicon.ico'){
           return
       }
       if(err) throw err;
       var str=data.toString();
     for(let i=0;i<data.length;i++){
         fs.stat('./album/'+data[i],(err,stats)=>{
             if(err) throw err;
             if(stats.isDirectory()){
                 console.log(data[i]);
             }

         })
     }
       res.end()
   })
    
}).listen(5000)