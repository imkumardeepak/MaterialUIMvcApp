const path = require('path');

module.exports = {
  entry: './wwwroot/js/site.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};