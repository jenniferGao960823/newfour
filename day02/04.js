var http=require('http');
var url=require('url');      //输出路径

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':"text/html;charset=utf8"})
    var obj=url.parse(req.url,true).query      //obj不能命名为url，会冲突    传入参数true可以使返回query为对象  query:获取(接收)get方式传输过来的字段
    console.log(obj);       //输出结果为string，需要通过toString()方法转化
    res.end(obj)       //输出结果：{username:'xxx'},可以直接通过.username获取用户名
    
    // if(req.url=='/send'){
    //     console.log(req)
    //     console.log('已经接受到前端发送的请求');
        
    //     res.end(req)
    // }
}).listen(3000)