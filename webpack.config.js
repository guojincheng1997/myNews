
module.exports = {
  entry:  __dirname + "/aa.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname,//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module:{
    loaders:[
      {
       test:/\.css$/,
       loader:"style-loader!css-loader"
      },
      {
        test:/\.js$/,
        loader:"babel-loader",
        exclude:/(node_modules)/,
        query:{
          presets:["react","es2015"]
        }
      }
    ]
  }
}