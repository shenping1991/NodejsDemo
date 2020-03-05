//node server.js 启动服务
const http=require("http");
const url=require("url");
const fs=require('fs');
var querystring=require('querystring');
const server=http.createServer((req,res)=>{
    var url=req.url;
    var corsUrl='*';
    console.log(req.url);
    //可以解决跨域的请求
    if(req.headers["origin"] === "http://127.0.0.1:3002"){
        corsUrl = "http://127.0.0.1:3002";
    }else if(req.headers["origin"] === "http://localhost:3002"){
        corsUrl = "http://localhost:3002";
    }
    if(url.startsWith("/get")){
        var str=fs.readFileSync('../data/book.json');
        res.writeHead(200,"ok",{
            //'Content-Type':'application/json;charset=utf-8',
            'Content-Type':'text/plain;charset=utf-8',
            "Access-Control-Allow-Origin":'*',//可以解决跨域的请求
            "Access-Control-Allow-Headers":"damu",
            "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
            "Access-Control-Max-Age":"10"
        });
        res.write(str);
        res.end();
    }else if(url.startsWith("/post")){
        res.writeHead(200,"OK",{
            "Content-type":"application/x-javascript",
            "Access-Control-Allow-Origin":corsUrl,
            "Access-Control-Allow-Headers":"zd",
            "Access-Control-Allow-Methods":"PUT,DELETE",
            "Access-Control-Max-Age":"10"
        });
        var str=fs.readFileSync('../data/book.json');
        res.write(str);
        res.end();
    }
})

server.listen(3002,function(){
    console.log("the server is running...");
})