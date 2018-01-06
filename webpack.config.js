const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry:[ 
    './scss-src/main.scss',
    './js-src/app.js',    
  ],
  output:{
    filename:'./dist/app.bundle.js'
  },
  devServer:{
    inline:true,
    contentBase:'./',
    port:3000
  },
  module:{
    loaders:[
      {
        test:/\.js[x]?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.scss$/,
        loader:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins:[
    //Minify build
    //new UglifyJsPlugin(),
    //Build production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    //Expose jquery window global
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        tether: 'tether',
        Tether: 'tether',
        'window.Tether': 'tether',
    })
  ]
};