# 1. day01关键点
## 4000服务器
   ### 真正用于提供数据的响应服务器，就是后端服务器。提供接口。
##  4000服务器启动了不能登录怎么回事
   ###  更换于以下服务器的端口号即可，
##  更改服务器端口号
   ###  config ---->index----->port 改为5000  然后将项目package.json  中代理服务器改为5000
## 项目启动步骤    
   1. ####  C:\尚硅谷教学视频\6-第六阶段react\react_project_stu\code\admin_client_final   终端打开   yarn start
   2. ####  C:\尚硅谷教学视频\6-第六阶段react\react_project_stu\code\admin_client_final 终端打开   yarn start
## 终端软件可以用  terminus   老师给过安装包

##  搭建应用的一级路由
   #### 一级路由   /login   /admin
   ##### 1. yarn add react-router-dom
   ##### 2. 新建pages   新建pages/login   pages/admin 
   ##### 3. app.js   引入 上述两个路由组件    引入  react-router-dom  {Switch,Route} index.js   引入  react-router-dom   {BrowserRouter}    包住  App  app.js   switch ->Route   Route Redirect
   ##### 4. login组件编写  
   ##### 5. 清除默认样式  minreset  
   ##### 6. 编写login页面  注意图片import 引入
   ##### 7. input   校验   两种规则