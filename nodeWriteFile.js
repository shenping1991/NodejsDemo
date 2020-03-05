var fs=require('fs');
// var http=require('http');
// var server=http.createServer();
// server.on('request',function(req,res){
    fs.writeFile('./files/helloWrite.txt','Hello Everyone,I come from a fs write.',function(error){
        if(error){
            console.log('write file fail');
        }else{
            console.log('write file succeed');
        }
    })
    // req.on('data',function(fs){
    //     response.writeHead(200,{'Content-Type':'text/plain'});
    //     response.end();
    // });
    // req.on('end',function(){
    //     console.log('done');
    // })
// })
// server.listen(3002,function(){
//     console.log('the server is running...')
// })

