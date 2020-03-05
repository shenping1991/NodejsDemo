//创建简单服务
//cd node httpServer.js
var http = require('http');//1. 加载 http 核心模块

var server=http.createServer() //2. 使用 http.createServer() 方法创建一个 Web 服务器
server.on('request',function(req,res){
    console.log('收到客户端请求路径为：'+req.url);
    res.write('hello server');
})

server.listen(3002,function(){
    console.log('服务器已启动，可通过 http://127.0.0.1:3002/ 访问');
})