var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' });
    if (req.url == '/favicon.ico') {
        return
    }
    var obj = url.parse(req.url, true).query;
    var message = '用户名:' + obj.username + ';密码:' + obj.password;
    console.log(message);
    fs.readFile('./a.txt', (err, data) => {
        var arr = data.toString().split('#');
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            if (arr[i] == message) {
                res.end('登陆成功')
            } 
        }
        res.end('密码错误')
    })
}).listen(4000, function () {
    console.log('listen挂起')
})