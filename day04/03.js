var http=require('http')
var querystring=require('querystring')     //查询字符串
// console.log(querystring);

var obj=querystring.parse('name=tom&age=12')
// console.log(obj);          //输出结果为对象: { name: 'tom', age: '12' }
var obj2=querystring.stringify({ name: 'tom', age: '12' })
// console.log(obj2);           //输出结果为字符串:  name=tom&age=12
var obj3=querystring.encode({name:"小明"})
// console.log(obj3);            //name=%E5%B0%8F%E6%98%8E
var obj4=querystring.decode("name=%E5%B0%8F%E6%98%8E");
// console.log(obj4);              // { name: '小明' }
var obj5=querystring.escape({name:'小明'})
console.log(obj5);                //name%3D%E5%B0%8F%E6%98%8E

