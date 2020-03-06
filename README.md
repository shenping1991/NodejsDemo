# 基于Nodejs实践实例
---------------------------------------
### 1、项目简介：
Node.js 就是运行在服务端的 JavaScript。 Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。 通过本项目实践本地前后端数据通信功能，及Node.js的功能使用，将不断结合前端框架增加实例实践。
### 2、功能特性：
本项目基于Nodejs
1.  实现js创建启动http服务，实现文件读写功能；  
2.  通过自己封装ajax及调用jQuery ajax等方式实现前后端数据传输，get/post数据传参功能；  
3.  结合art-template模板引擎前后端的使用，便捷数据绑定页面显示；  
4.  包含Requirejs的js模块化加载配置功能，按需加载js,减少http请求，优化请求响应速度。
### 3、环境依赖：
本项目依赖环境：node、npm（后续增加）  
![nodejs]()
1.  nodejs官网下载安装 http://nodejs.cn/ ，同步自动安装npm；
2.  命令行工具，执行命令显示对应版本信息：  
  >node --version 查看 node 版本；  
  >npm  --version 查看 npm 版本；

### 4、目录结构描述：
html文件与对应的js文件采用同后缀名命名方式，例如：1_test.html,1_test.js;

### 5、部署步骤：
安装art-template,jquery等依赖包：  

>1.  npm install art-template --save-dev  
>2.  npm install jquery --save-dev  

启动http服务，命令行输入命令：
>  node server.js

### 6、版本内容更新：
日更
