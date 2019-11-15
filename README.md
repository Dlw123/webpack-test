# 初始化 packeage.json
> npm init 或者npm init -y、-y表示默认

# 安装webpack webpack-cli
> npm i webpack webpack-cli -D    

# 创建webpack配置文件
> touch webpack.config.js

# 在package.json文件的script写入打包命令
```javascript
"script":{
    "build":"webpack --config=webpack.config.js"
}
```

### loader处理CSS
> npm i style-loader css-loader -D

### loader处理less
> npm i style-loader css-loader less-loader less -D

### 分离css
> npm i mini-css-extract-plugin -D

### 处理图片
> npm i file-loader url-loader -D

### 处理模板html
> npm i html-webpack-plugin -D