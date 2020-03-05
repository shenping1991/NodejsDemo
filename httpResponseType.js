//不同类型的请求路由设置响应头文件
var http=require('http');
var fs=require('fs');
var server=http.createServer();
server.on('request',function(req,res){
    var url=req.url;
    if(url==='/plain'){
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end('hello txt');

    }
    else if(url==='/html'){
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<p>hello html <a href="https://wwww.batdu.com">click me</a></p>')

    }
    else if(url==='/image/logo'){
        fs.readFile('./images/logo.png',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end('read file fail');
            }
            else{
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    }
})

server.listen(3002,function(){
    console.log('Server is running...');
})