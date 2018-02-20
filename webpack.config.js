var webpack = require('webpack');
var path = require('path');
var inProduction = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{

  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './js/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
          { test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
          // ,{
          //   test: /\.(jpe?g|png|gif|svg)$/i,
          //   use: 'img-loader'
          // }
    ]
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: inProduction
      })
  ]

}, {
  entry: {
    main: './scss/main.scss',
  },
  output: {
    path: path.resolve(__dirname, './css'),
    filename: '[name].css'
  },
  module: {
    rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                  loader: 'css-loader',
                  options: {
                      url: false,
                      minimize: true
                  }
                  },
                  {
                    loader: 'sass-loader',
                  }
                ]
            })
          }
        ]
      },
      plugins: [
          new ExtractTextPlugin('main.css')
      ]
    }
    // ,
    // {
    //   entry: {
    //     name: '/images'
    //   },
    //   output: {
    //     path: path.resolve(__dirname, '/images/build'),
    //     filename: [name].[ext]
    //   },
    //   module: {
    //       rules: [
    //         {
    //           test: /\.(jpe?g|png|gif|svg)$/i,
    //           use: 'img-loader'
    //         }
    //       ]
    //     }
    // }
];

if(inProduction) {
  module.exports[0].plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
