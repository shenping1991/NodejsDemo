//node 中art-template模板引擎使用
let http=require('http');
let template=require('art-template');
let fs=require('fs');
let server=http.createServer();
server.on('request',function(req,res){
    fs.readFile('./template/tpl.html',function(err,data){
        if(err){
            return console.log('read file error');
        }
        let ret=template.render(data.toString(),{
            title:'Person Card',
            name:'Sp',
            age:20,
            hobbies:[
                'reading',
                'write',
                'watch tv'
            ]
        })
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end(ret);
    })

})

server.listen(3002,function(){
    console.log('the server is running...')
})