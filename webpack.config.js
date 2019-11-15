const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production',

    devtool: 'source-map',

    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.ts', '.tsx', '.js']
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{ loader: 'ts-loader' }]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ]
  };
};
