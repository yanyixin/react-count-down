const webpack = require('webpack');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const path = require("path");
const workingDir = process.cwd();

module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    filename: "app.bundle.js",
    path: __dirname + "dist",
    publicPath: '/assets'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },{
        test: /\.scss$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap!sass-loader?sourceMap!autoprefixer-loader'
      },
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader', 'source-map-loader']
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(workingDir, 'src/components/'),
      Module: path.resolve(workingDir, 'src/module/')
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true
    }
  })
    // new openBrowserWebpackPlugin({
    //   url: 'http://localhost:8081/index.html'
    // }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

