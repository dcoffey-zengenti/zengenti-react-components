// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const webpack = require('webpack');
const packagejson = require('../package.json');
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packagejson.version),
      DELIVERY_API_CONFIG: {
        rootUrl: JSON.stringify('https://cms-kcl.cloud.contensis.com'),
        livePublishingRootUrl: JSON.stringify(
          'https://preview-mathsschool-kcl.cloud.contensis.com'
        ),
        accessToken: JSON.stringify(
          'JjV9NgvYm8BQgTNx2AtThsRBeK5qZxArDnRc2SKrzYWzvsS6'
        ),
        projectId: JSON.stringify('mathsSchool'),
      },
    }),
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../src/app'),
      app: path.resolve(__dirname, '../src/app'),
    },
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  watchOptions: {
    ignored: ['node_modules', 'dist'],
  },
};