var http=require('http');

const querystring = require('querystring');
const postData = querystring.stringify({
    'msg': 'hello'
  });
const options={
    hostname:'localhost',
    port:3003,
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};
const req=http.request(options,(res)=>{
    console.log(`statusCode:${res.statusCode}`);
    console.log(`responseHead:${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data',(chunk)=>{
        console.log(`responseBody:${chunk}`);

    })
    res.on('end',()=>{
        //监听end事件，响应结束时弹出提示
        console.log('response no data now.');

    })
    
})
req.on('error',(e)=>{
    //监听error事件，响应出错时弹出错误信息
    console.error(`request has problem:${e.message}`);
})
// 将数据写入请求主体。
req.write(postData);
req.end();