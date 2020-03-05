var http=require('http');
var urlLib=require('url');
var fs=require('fs');
var querystring=require('querystring');
//利用http模块创建本地服务
http.createServer(function(req,res){
    if(req.method.toLocaleLowerCase()==="get"){
        res.setHeader('Access-Control-Allow-Origin','*');//跨域
        //利用url模块解析网页传递的地址数据
        var json=urlLib.parse(req.url,true).query;
        fs.writeFile("../files/"+json.fileName+".txt",json.content,function(err){
            if(err) console.log(err);
            console.log("write done");
        })
    }else if(req.url.indexOf('/getRequest') === 0 &&req.method.toLocaleLowerCase()==="post"){
        res.setHeader('Access-Control-Allow-Origin','*');//跨域
        //接受post请求的参数
        var postData="";
        req.on('data',function(chunk){
            //每次发送的数据叠加到postData
            postData+=chunk;
            console.log(postData);
            console.log('数据已接收');
        })
        req.on('end', function () {
            //使用querystring模块来解析post请求
            /**
             * querystring详解
             * 参数：要解析的字符串
             * 返回值：解析之后的对象。
             */
            var postObj=querystring.parse(postData);
            fs.readFile("../files/"+postObj.fileName+".txt",function (err,data){
                if(err) console.log(err);
                console.log("read done");
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.write(data.toString());
                res.end();
            })
        })
    }
    
}).listen(3002,function(){
    console.log("the server running at port 3002.");
});