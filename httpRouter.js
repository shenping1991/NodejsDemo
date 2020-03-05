//不同路由不同页面信息
//cd node httpRouter.js
var http=require('http');

var server=http.createServer();
server.on('request',function(req,res){
    console.log('request url is:'+req.url);
    console.log('request client address is:'+req.socket.remoteAddress,req.socket.remotePort);
    var url=req.url;
    if(url==='/'){
        res.end('I am a home page.');
    }else if(url==='/login'){
        res.end('I am a login page.');
    }else if(url==='/manage'){
        res.end('I am a manage page.')
    }
    else{
        res.end('404,I am a not found page.')
    }
})

server.listen(3002,function(){
    console.log('the server is running...');
})
