# vue-bookstore

> 基于vue2 + vue-router2 + vue-resource + node(简易)；利用Webpack和vue-cli生成项目模板；并使用Bootstrap写页面结构排版,页面主要分成四个组件(主页、图书列表、图书详情、添加图书)；使用vue-router进行页面跳转；插件vue-resource可以从服务器通过'$http'发送请求，并.then方式处理响应的结果。这个只是学习用，并没有对页面进行美化。
```
npm install -g webpack //全局安装
npm install -g vue-cli //全局安装vue-cli
vue init webpack vue-bookstore //生成项目模板
cd vue-bookstore //进入项目文件
npm install //初始化安装依赖
```
**注意**：要在node环境下操作
```
//需要的插件
npm install bootstrap vue-resource -S
```
### vue-resource
vue-resource与ajax是相似的，通过XMLHttpRequest或JSONP发起请求并处理响应。
在发送请求后，使用.then方法来处理响应的结果，then方法有两个参数，第一个是响应成功是的回调函数，第二个是响应失败的回调函数。


### 结构目录
<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── server             // 后台服务
│   ├── books.json     // 数据储存
│   └── server.js      // 数据操作  
├── src
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── router         // 存放路由的文件夹
│   ├── App.Vue        // 模板文件入口
│   └── main.js        // Webpack 预编译入口
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件

</pre>
