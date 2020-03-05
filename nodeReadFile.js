//读取文件
//fs 是 file-system 的简写，文件系统，提供了所有的文件操作相关的API
var fs=require('fs');
var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,response){
    //暂存请求体的信息
    var postData='';
    req.on('data',function(chunk){
        postData+=chunk;
    });
    req.on('end',function(){
        postData=querystring.parse(postData);//json对象序列化
        console.log(postData);
    })
    fs.readFile('./files/hello.txt',function readData(error,data){
        // if(error){
        //     console.log('read file error');
        // }
        // else{
        //     console.log(data.toString());
        // }
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end(data.toString());
    })
}).listen(3002,'127.0.0.1');


