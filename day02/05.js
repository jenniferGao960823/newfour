var http=require('http');
var fs=require('fs')
var url=require('url');      //输出路径
http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return
    }
    var obj1=url.parse(req.url,true).query;
    console.log(url.parse(req.url));
    var obj=url.resolve('http://127.0.0.1:3000/a','/b')   //resolve  转为字符串  第二个参数的路由会替换当前路径的一级路由
    console.log(obj);    //输出http://127.0.0.1:3000/b
    var obj2=url.format( {
        protocol: null,
        slashes: null,
        auth: null,
        host: 'http://127.0.0.1:3000',
        port: '3000',
        hostname: 'http://127.0.0.1',
        hash: null,
        search: '?username=200',
        query: 'username=200',
        pathname: '/send',
        path: '/send?username=200',
        href: '/send?username=200'
      })    //format  格式化  把对象转化为字符串，读取的内容是具体的参数（如路由等） 
    //！！！输出的是字符串  括号内传入的是对象
    console.log(obj2);
    
   res.writeHead(200,{'Content-type':"text/html;charset=utf8"});
   res.end('接收到前端传输的用户名为：'+obj1.username)
}).listen(3000,function(){
    console.log('listen挂起');
    
})

