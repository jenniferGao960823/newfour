//formidable模块
var fd=require('formidable');

var http=require('http');
var path=require('path');
var fs=require('fs')
var sd=require('silly-datetime')
http.createServer((req,res)=>{
    if(req.url=='/send' && req.method=='POST'){
        var form=new fd.IncomingForm();
        var dir= form.uploadDir='./uploads/'
        
        form.parse(req,function(err,fields,files){
            // console.log(fields);    //{username:'',password:''}
            // var username=fields.username
            var outpath=files.pic.path
            var extname=path.extname(files.pic.name);
            var tt=sd.format(new Date(),'YYYYMMDDHHmmss')
            var newpath=dir+tt+extname;
            //重命名,使图片名称不会重复,且可以下载相同图片,不会发生覆盖
            fs.rename(outpath,newpath,(err)=>{
                if(err) throw err;
                // console.log('success');
                 res.end('success')
                
            })
            
        })
    }
}).listen(3000)