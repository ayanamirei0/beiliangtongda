# 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + axios + sass

框架：使用了vue全家桶进行开发，路由跳转使用的是vue-router，数据请求使用了官方推荐的axios插件,使用es6/7进行开发。

实用对象： PC端项目

css预处理器：目前流行的css预处理主要是stylus，less，sass（本项目采用sass）

后台接口：

跨域处理：由于使用的外部接口，前端项目运行地址与接口访问地址不同，浏览器的同源策略使得我们不得不处理跨域，因此需要对跨域进行简单处理。
1. 开发模式下：需要在config下的index.js进行配置
```
proxyTable: {
     '/api': {  
         target: 'http://test.happymmall.com', //源地址
         changeOrigin: true, //改变源
         pathRewrite: {
             '^/api': '' //路径重写
         }
     }
 }
 ```
 
 在进行接口请求时在接口路径前加/api即可，编译后会将/api重写为线上的接口地址
 
 2. 生产模式下：在这里使用的是nignx，需要在远程服务器上安装nignx，然后在nginx.conf文件内配置location即可。

# 功能介绍


<br>

后续：

1. 在这里只是简单实现了基本功能，当然作为web-app，用户体验是第一位的，后续会持续的对项目进行性能优化
2. 数据请求这块使用的axios插件，后续会用原生fecth进行实现


# 项目演示

# 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

