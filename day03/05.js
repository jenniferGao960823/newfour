//path模块
var path=require('path');
// console.log(path);
var str=path.resolve('./album/','bb');
// console.log(str);   //D:\学习资料\last Progress\node-class\day03\album\bb
var str2=path.normalize('./01.js');
// console.log(str2);     //01.js
var str3=path.dirname('./static/form.html');
// console.log(str3);   //./static目录名称
var str4=path.basename('./static/form.html');
// console.log(str4);        //bb   本文件或文件夹名称
var base=path.basename('./static/form','html')
// console.log(base);        //form

var str5=path.extname('./package-lock.json');
// console.log(str5);        //.json  获取文件后缀名

var obj=path.normalize('./album////////aa/')
// console.log(obj);      //./album/aa
var obj1=path.join('/a','b','/c','///d')
// console.log(obj1);    // /a/b/c/d
var obj3=path.format({
    root:'/aaa',
    dir:'/b/c',
    base:'d'
})
// console.log(obj3);

var obj4=path.parse('/a/b/c')
console.log(obj4);  //{ root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c' }

var obj5=path.resolve('/a/b','c')
console.log(obj5);    //D:\a\b\c    包含盘符,从右向左解析,符合路径的格式会立刻抛出
var obj6=path.resolve('/a/b','/c','/d','/e')
// console.log(obj6);       //  D:\e
var obj6=path.resolve('/a/b','/c','/d','e')
// console.log(obj6);       //  D:\d\e
var obj7=path.isAbsolute('D:/学习资料/last Progress/node-class/day03')
console.log(obj7);
