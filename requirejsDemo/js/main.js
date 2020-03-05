//加载模块时不用写.js后缀的，当然也是不能写后缀
//配置模块加载位置
require.config({
    baseUrl: "js",//基目录
    //参数就是一个对象，这个对象的paths属性指定各个模块的加载路径
    paths:{//可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库
        
        "jquery":["http://libs.baidu.com/jquery/2.0.3/jquery","./js/jquery-1.11.1"],
        "module_a":"module_a",
        "module_b":"module_b"
    },
    shim:{//垫 非AMD模块输出，将非标准的AMD模块"垫"成可用的模块
        "underscore":{
            exports:"_"
        },
        "jquery.form" :["jquery"],
        'jquery.scroll': {
    　　　　 deps: ['jquery'],
    　　　　 exports: 'jQuery.fn.scroll'
    　　　}
    }
})
// require([数组]加载该模块,callback function是用来处理加载完毕后的逻辑)
//$为依赖的jquery模块的输出变量
// require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
// 　　　// some code here
// });
require(["jquery","jquery.form","module_a","module_b"],function($,_){
    $(function(){
        $("#ajaxForm").submit(function () {
            $(this).ajaxSubmit(function () {
                alert("提交成功1");
            });
            return false;
        });
        $("#btnButton").click(function () {
            $("#ajaxForm").ajaxSubmit(function () {
                alert("提交成功2");
            });
            return false;
        })
    })
    document.getElementById("tip_success").innerHTML="完成加载依赖";
});